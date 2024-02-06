import type { RouterOutputs } from "@acme/api";

import { DayCard } from "~/app/components/day-card";

export function DaysList(props: {
  days: RouterOutputs["group"]["all"][number]["days"];
}) {
  if (props.days.length === 0) {
    return (
      <div className="relative flex w-full">
        <p className=" text-white">No groups yet</p>
      </div>
    );
  }
  // TODO: sort days by day of week
  return (
    <div className="flex flex-row rounded-lg bg-muted p-4">
      {props.days.map((day) => {
        return <DayCard key={day.id} day={day} />;
      })}
    </div>
  );
}
