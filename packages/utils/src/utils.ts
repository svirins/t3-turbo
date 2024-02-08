import { format, getWeekOfMonth } from "date-fns";
import { ru } from "date-fns/locale";

import { Repeats, WeekDays } from "./types";

export function getCurrentDayFilters() {
  const today = new Date().toLocaleDateString("en-US", {
    timeZone: "Europe/Minsk",
  });
  const dayOfWeek = format(today, "EEEE");
  const weekNumber = getWeekOfMonth(today, { weekStartsOn: 1 });
  const totalWeeks = getWeekOfMonth(today, { weekStartsOn: 1 });

  // !! `FOURTH` case it wrong. we should use `LAST` instead
  // TODO: Handle 'State Holidays' case
  // default
  let repeatsFilter = [Repeats.Weekly];
  // handle first week
  if (weekNumber === 1) {
    repeatsFilter.push(Repeats.First);
  } else {
    repeatsFilter.push(Repeats.NotFirst);
  }
  // handle odd and even weeks
  if (weekNumber % 2 === 0) {
    repeatsFilter.push(Repeats.Even);
  } else {
    repeatsFilter.push(Repeats.Odd);
  }
  // handle last week
  if ((weekNumber === 4 && totalWeeks === 4) || weekNumber === 5) {
    repeatsFilter.push(Repeats.Last);
  } else {
    repeatsFilter.push(Repeats.NotLast);
  }

  return {
    dayOfWeekFilter: WeekDays[dayOfWeek as keyof typeof WeekDays],
    repeatsFilter,
  };
}

export function getHoursFromDate(date: Date) {
  return format(date, "H:mm");
}

export function getToday() {
  const today = new Date().toLocaleDateString("en-US", {
    timeZone: "Europe/Minsk",
  });
  const localizedToday = format(today, "EEEE, do MMMM", { locale: ru });
  return {
    localizedToday,
  };
}
