export const formatNumber = (value?: number) => {
  return new Intl.NumberFormat("id-ID").format(value ?? 0);
};

export const shortenLabel = (label: string, max = 16) => {
  return label.length > max ? `${label.slice(0, max)}...` : label;
};

export const formatUpdatedAt = (dateStr?: string) => {
  if (!dateStr) return "Data diperbarui otomatis dari spreadsheet.";
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      return "Data diperbarui otomatis dari spreadsheet.";
    }
    
    const formatted = date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    
    const time = date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    }).replace(':', '.');
    
    return `Terakhir diperbarui: ${formatted}, ${time}`;
  } catch {
    return "Data diperbarui otomatis dari spreadsheet.";
  }
};
