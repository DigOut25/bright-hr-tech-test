export function deriveEndDate(startDate: string, days: number): Date {
  const start = new Date(startDate);
  const end = new Date(start);
  end.setDate(start.getDate() + days);
  return end;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
