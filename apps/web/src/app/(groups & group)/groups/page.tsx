import { Suspense } from "react";

import { prisma } from "@acme/db";

import { Filters } from "~/components/filters";
import { GroupList } from "~/components/group-list";
import { GroupSkeleton } from "~/components/group-skeleton";
import { api } from "~/trpc/server";

export default async function AllGroupsPage({
  searchParams,
}: {
  searchParams?: { city?: string };
}) {
  // TODO: cache this Prisma call or use a pre-defined array
  const cities = await prisma.address.findMany({
    select: {
      city: true,
    },
  });
  const uniqueCities = Array.from(new Set(cities.map((city) => city.city)));
  // TODO: Handle 'all' case, handle multiple selections case
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
        <Filters cities={uniqueCities} />
        <GroupList data={data} />
      </Suspense>
    </div>
  );
}
