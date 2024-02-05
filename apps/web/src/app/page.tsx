import { Suspense } from "react";

import { api } from "~/trpc/server";
import { GroupCardSkeleton, GroupList } from "./_components/groups";

// export const runtime = "edge";

export default async function HomePage() {
  // You can await this here if you don't want to show Suspense fallback below
  const groups = await api.group.all();
  const locations = await api.location.all();
  console.log("Groups");
  console.dir(groups);
  console.log("Locations");
  console.dir(locations);

  return (
    <main className="container h-screen py-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="text-primary">NA</span> Belarus locator
        </h1>

        <div className="w-full max-w-2xl overflow-y-scroll">
          <Suspense
            fallback={
              <div className="flex w-full flex-col gap-4">
                <GroupCardSkeleton />
                <GroupCardSkeleton />
                <GroupCardSkeleton />
              </div>
            }
          >
            <GroupList groups={groups} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
