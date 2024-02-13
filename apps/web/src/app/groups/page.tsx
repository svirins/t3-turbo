import { Suspense } from "react";

import type { WeekDays } from "@acme/utils";
import { prisma } from "@acme/db";
import { getCurrentDayFilters, getToday, WeekDaysRU } from "@acme/utils";

import { CityFilter } from "~/components/city-filter";
import { GroupList } from "~/components/group-list";
import { GroupSkeleton } from "~/components/group-skeleton";
import { WeekdayFilter } from "~/components/weekday-filter";
import { api } from "~/trpc/server";

export default async function AllGroupsPage({
  searchParams,
}: {
  searchParams?: { city?: string; weekday?: string };
}) {
  const { dayOfWeekFilter, repeatsFilter } = getCurrentDayFilters();
  const { localizedWeekday } = getToday();

  // TODO: Call date-fns to get capitalized weekday
  const currentWeekday = `${localizedWeekday.charAt(0).toUpperCase()}${localizedWeekday.slice(1)}`;

  // TODO: cache this Prisma call or use a pre-defined array
  const cities = await prisma.address.findMany({
    select: {
      city: true,
    },
  });

  const uniqueCities = Array.from(new Set(cities.map((city) => city.city)));

  const weekdayToSearch = searchParams?.weekday
    ? (Object.keys(WeekDaysRU).find(
        (key) =>
          WeekDaysRU[key as keyof typeof WeekDaysRU] === searchParams?.weekday,
      ) as WeekDays)
    : dayOfWeekFilter;

  const citiesFilter =
    searchParams?.city === "Вся Беларусь" || !searchParams?.city
      ? [...uniqueCities]
      : [searchParams?.city];

  // TODO: consider sort criteria
  const data = api.group.byCitiesAndByWeekday({
    cities: citiesFilter,
    dayOfWeekFilter: weekdayToSearch,
    repeatsFilter: repeatsFilter,
  });

  return (
    <div className="container pb-24">
      <Suspense
        fallback={
          <div className="flex w-full flex-col gap-4">
            <GroupSkeleton />
            <GroupSkeleton />
            <GroupSkeleton />
          </div>
        }
      >
        <div className="flex flex-row justify-between pb-4">
          <CityFilter cities={uniqueCities} />
          <WeekdayFilter today={currentWeekday} />
        </div>
        <GroupList
          data={data}
          isToday={
            !searchParams?.weekday || searchParams?.weekday === currentWeekday
          }
        />
      </Suspense>
    </div>
  );
}
