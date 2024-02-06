import { format, getWeekOfMonth } from "date-fns";

import { Repeats, WeekDays } from "./types";

export function getCurrentDayFilters() {
  const today = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Minsk",
  });
  const dayOfWeek = format(today, "EEEE");
  const weekNumber = getWeekOfMonth(today, { weekStartsOn: 1 });
  const totalWeeks = getWeekOfMonth(today, { weekStartsOn: 1 });
  let repeatsFilter = [Repeats.Weekly];

  if (weekNumber === 1) {
    repeatsFilter.push(Repeats.First, Repeats.Odd);
  }
  if (weekNumber === 2) {
    repeatsFilter.push(Repeats.Even);
  }

  if (weekNumber === 3) {
    repeatsFilter.push(Repeats.Odd);
  }

  if (weekNumber === 4) {
    if (totalWeeks === 4) {
      repeatsFilter.push(Repeats.Even, Repeats.Last, Repeats.Fourth);
    } else {
      repeatsFilter.push(Repeats.Even, Repeats.Fourth);
    }
  }
  if (weekNumber === 5) {
    repeatsFilter.push(Repeats.Last, Repeats.Odd);
  }
  return {
    dayOfWeekFilter: WeekDays[dayOfWeek as keyof typeof WeekDays],
    repeatsFilter,
  };
}
