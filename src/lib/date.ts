export type DateFormat =
  | "dd/mm/yyyy"
  | "yyyy/mm/dd"
  | "dd-mm-yyyy"
  | "yyyy-mm-dd";

export const getFirstDayAndLastDayOfMonth = (format: DateFormat) => {
  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return {
    currentDay: formatDate(firstDay, format),
    lastDay: formatDate(lastDay, format),
  };
};

export const formatDate = (date: Date, format: DateFormat) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return format
    .replace("dd", day.toString().padStart(2, "0"))
    .replace("mm", month.toString().padStart(2, "0"))
    .replace("yyyy", year.toString());
};
