import { use } from "react";

import type { RouterOutputs } from "@acme/api";

import { Information } from "~/components/information";
import { Meetings } from "~/components/meetings";
import { GroupSkeleton } from "./group-skeleton";

export function GroupList({
  data,
}: {
  data: Promise<RouterOutputs["group"]["all"]>;
}) {
  const initialData = use(data);
  // TODO: Make `useSuspenseQuery` work without having to pass a promise from RSC

  // const { data: groups } = api.group.all.useQuery(undefined, {
  //   initialData,
  // });
  if (initialData.length === 0) {
    return (
      <div className="flex w-full flex-col gap-4">
        <GroupSkeleton />
        <GroupSkeleton />
        <GroupSkeleton />
        <p>No meetings today</p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {initialData.map(({ days, ...rest }) => {
        return (
          <div key={rest.id}>
            <Information data={rest} />
            <Meetings data={days[0]!.meetings} />
          </div>
        );
      })}
    </div>
  );
}
