export interface ChartDataItem {
  label: string;
  value: number;
}

export interface DashboardSummary {
  total_penduduk: number;
  total_rt: number;
  total_rw: number;
}

export interface DashboardCharts {
  pendidikan: ChartDataItem[];
  pekerjaan: ChartDataItem[];
  rt: ChartDataItem[];
  rw: ChartDataItem[];
}

export interface DashboardData {
  updatedAt: string;
  summary: DashboardSummary;
  charts: DashboardCharts;
}
