import { Suspense } from "react";

import { prisma } from "@acme/db";
import { getCurrentDayFilters, getToday } from "@acme/utils";

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

  // TODO: Modify API call to accept multiple filters
  // const data = api.group.allToday({ dayOfWeekFilter, repeatsFilter });

  // TODO: cache this Prisma call or use a pre-defined array
  const cities = await prisma.address.findMany({
    select: {
      city: true,
    },
  });
  const uniqueCities = Array.from(new Set(cities.map((city) => city.city)));

  // TODO: get today from utils
  const data = searchParams?.city
    ? api.group.allByCity({
        city: searchParams.city,
      })
    : api.group.all();
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
        <div className="flex flex-row pb-4">
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
