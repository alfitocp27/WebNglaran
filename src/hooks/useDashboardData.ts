import { useCallback, useEffect, useState } from "react";
import type { DashboardData } from "../types/dashboard";
import { fetchDashboardData } from "../lib/dashboard-api";

export function useDashboardData(refreshMs = 60000) {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      setError(null);
      const result = await fetchDashboardData();
      setData(result);
    } catch (err) {
      console.error("Dashboard API Error:", err);
      setError("Statistik belum bisa dimuat saat ini. Silakan coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadData();
    if (refreshMs > 0) {
      const interval = window.setInterval(loadData, refreshMs);
      return () => window.clearInterval(interval);
    }
  }, [loadData, refreshMs]);

  return { data, loading, error, refresh: loadData };
}
