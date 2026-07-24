import { useEffect } from 'react';
import { useDashboardData } from '../../hooks/useDashboardData';
import ChartCard from './ChartCard';
import ResponsiveBarChart from './ResponsiveBarChart';
import ResponsivePieChart from './ResponsivePieChart';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { formatUpdatedAt } from '../../lib/format';

export default function StatistikPadukuhan() {
  const { data, loading, error } = useDashboardData(60000);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [loading]);

  if (loading) {
    return (
      <section id="statistik" className="py-24 px-6 lg:px-12 xl:px-32 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 transition-colors">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[400px]">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-zinc-200 dark:border-zinc-700 border-t-zinc-900 dark:border-t-zinc-400 rounded-full animate-spin mb-4"></div>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-bold uppercase tracking-widest">Memuat Statistik...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="statistik" className="py-24 px-6 lg:px-12 xl:px-32 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 transition-colors">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[400px]">
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-6 rounded-2xl max-w-md text-center border border-red-100 dark:border-red-900/50">
            <p className="font-bold mb-2">Gagal Memuat Data</p>
            <p className="text-sm opacity-80">Data statistik belum bisa dimuat.</p>
          </div>
        </div>
      </section>
    );
  }

  if (!data) {
    return null;
  }

  const pendidikan = data.charts.pendidikan ?? [];
  const pekerjaan = data.charts.pekerjaan ?? [];
  const rt = (data.charts.rt ?? []).filter(item => !item.label.toLowerCase().includes('total'));
  const usia = data.charts.usia ?? [];
  const shdk = data.charts.shdk ?? [];

  console.log("StatistikPadukuhan rendering data:", data);

  return (
    <section id="statistik" className="py-24 px-6 lg:px-12 xl:px-32 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-header">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 mb-4">
            Data & Angka
          </h2>
          <h3 className="text-4xl lg:text-5xl font-serif italic text-zinc-900 dark:text-white mb-6">
            Statistik Padukuhan.
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
            Ringkasan data agregat penduduk Padukuhan Nglaran yang diperbarui secara otomatis.
          </p>
        </div>


        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 stagger-container">
          <div className="stagger-card h-full">
            <ChartCard title="Pendidikan Warga Padukuhan Nglaran">
              <ResponsivePieChart data={pendidikan} />
            </ChartCard>
          </div>
          <div className="stagger-card h-full">
            <ChartCard title="Rentang Usia Warga">
              <ResponsiveBarChart data={usia} layout="horizontal" fillColor="#4f81bd" sortData={false} showLabel={true} angleXAxis={true} customMargin={{ top: 15, right: 30, left: 0, bottom: 15 }} minWidth="min-w-0" />
            </ChartCard>
          </div>
          <div className="stagger-card h-full">
            <ChartCard title="Data RT Padukuhan Nglaran">
              <ResponsiveBarChart data={rt} layout="horizontal" fillColor="#f8c8c8" sortData={false} />
            </ChartCard>
          </div>
          <div className="stagger-card lg:col-span-2 h-full">
            <ChartCard title="Pekerjaan Warga Padukuhan Nglaran">
              <ResponsiveBarChart data={pekerjaan} layout="horizontal" fillColor="#e5d5ba" angleXAxis={true} />
            </ChartCard>
          </div>
          <div className="stagger-card h-full">
            <ChartCard title="SHDK Warga">
              <ResponsiveBarChart data={shdk} layout="vertical" fillColor="#c4b5fd" minWidth="min-w-0" />
            </ChartCard>
          </div>
        </div>

        <div className="text-center text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-widest reveal-header">
          {formatUpdatedAt(data.updatedAt)}
        </div>
      </div>
    </section>
  );
}
