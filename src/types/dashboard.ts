export interface ChartDataItem {
  label: string;
  value: number;
}

export interface DashboardSummary {
  total_penduduk?: number;
  total_rt?: number;
  total_rw?: number;
  total_umkm?: number;
  total_pekerjaan?: number;
  total_shdk?: number;
  [key: string]: number | undefined;
}

export interface DashboardCharts {
  pendidikan?: ChartDataItem[];
  pekerjaan?: ChartDataItem[];
  rt?: ChartDataItem[];
  rw?: ChartDataItem[];
  shdk?: ChartDataItem[];
  usia?: ChartDataItem[];
  [key: string]: ChartDataItem[] | undefined;
}

export interface DashboardData {
  success?: boolean;
  updatedAt: string;
  summary: DashboardSummary;
  charts: DashboardCharts;
}
