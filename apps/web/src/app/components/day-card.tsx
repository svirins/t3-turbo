import type { RouterOutputs } from "@acme/api";

import { MeetingCard } from "~/app/components/meeting-card";

export function DayCard(props: {
  day: RouterOutputs["group"]["all"][number]["days"][number];
}) {
  return (
    <div className="flex flex-row rounded-lg bg-muted p-4">
      <div className="flex-grow">
        <h2 className="text-xl font-medium text-primary">{props.day?.name}</h2>
        {props.day.meetings.map((meeting) => {
          return <MeetingCard key={meeting.id} meeting={meeting} />;
        })}
      </div>
    </div>
  );
}
