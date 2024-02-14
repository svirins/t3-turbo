// import { Suspense } from "react";

import { GroupSkeleton } from "~/components/group-skeleton";
import { ScheduledGroupList } from "~/components/scheduled-group-list";
import { api } from "~/trpc/server";

export default async function MySchedulePage() {
  const meetings = [
    "clsfvcggk001u11tlyfcrio2u",
    "clshw0xjy005pwtligdendyzn",
    "clshw0s1e004jwtliu2la3aan",
    "clshw079k0003wtlifpdmnoq3",
  ];
  const data = api.group.byScheduledMeetings({ scheduledMeetingIds: meetings });

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
        <div className="flex flex-row justify-between pb-4"></div>
        <ScheduledGroupList data={data} />
      </Suspense>
    </div>
  );
}
