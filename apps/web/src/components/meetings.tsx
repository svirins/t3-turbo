import type { RouterOutputs } from "@acme/api";
import { getHoursFromDate, TopicsRU } from "@acme/utils";

import { MyScheduleButton } from "~/components/my-schedule-button";

export function Meetings({
  data,
}: {
  data: RouterOutputs["group"]["all"][number]["days"][number]["meetings"];
}) {
  // TODO: Implement 'passed' / 'incoming' badge
  return (
    <div className="flex flex-col gap-4">
      {data.map((meeting) => (
        <Meeting key={meeting.id} data={meeting} />
      ))}
    </div>
  );
}
// TODO: topic color Open, Work, Speaker - different colors
function Meeting({
  data,
}: {
  data: RouterOutputs["group"]["all"][number]["days"][number]["meetings"][number];
}) {
  const start = getHoursFromDate(data.start);
  const end = getHoursFromDate(data.end);
  return (
    <div className="flex flex-row">
      <p className="text-bold font-mono">{`${start} -> ${end}`}</p>
      <MyScheduleButton id={data.id} />
      <p className="text-semibold text-right">
        {data.topics.map((t) => TopicsRU[t]).join(", ")}
      </p>
    </div>
  );
}
