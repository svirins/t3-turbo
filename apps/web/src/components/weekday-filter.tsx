"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { WeekDaysRU } from "@acme/utils";

export function WeekdayFilter({ today }: { today: string }) {
  const searchParams = useSearchParams();
  const selectedDay = searchParams.get("weekday")?.toString() ?? today;
  const pathname = usePathname();
  const { replace } = useRouter();
  const options = Object.values(WeekDaysRU) as string[];

  function handleSearch(day: string) {
    const params = new URLSearchParams(searchParams);
    params.set("weekday", day);
    replace(`${pathname}?${params.toString()}`);
  }
  // TODO: Add fullmonth schedule is available at group pager
  return (
    <form className="text-right">
      <select
        className="select select-sm max-w-xs"
        name="weekDaySelector"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      >
        {options.map((option) => (
          <option key={option} value={option} selected={option === selectedDay}>
            {option === today ? `${option} - сегодня` : option}
          </option>
        ))}
      </select>
    </form>
  );
}
