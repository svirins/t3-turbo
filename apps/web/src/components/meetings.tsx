import clsx from "clsx";

import type { RouterOutputs } from "@acme/api";
import { getHoursAndStatus, TopicsRU } from "@acme/utils";

import { ScheduleButton } from "~/components/my-schedule";

export function Meetings({
  data,
}: {
  data: RouterOutputs["group"]["all"][number]["days"][number]["meetings"];
}) {
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
  const { start, end, isPassed } = getHoursAndStatus(data.start, data.end);
  return (
    <div className="flex flex-row">
      <p className="mr-1 h-6 w-6 flex-none">
        <ScheduleButton id={data.id} />
      </p>
      <p
        className={clsx(
          "w-36 flex-none font-mono font-medium",
          isPassed && "text-gray-400",
        )}
      >{`${start} -> ${end}`}</p>
      <p
        className={clsx(
          "text-semibold min-w-72 flex-1 text-right",
          isPassed && "text-gray-400",
        )}
      >
        {data.topics.map((t) => TopicsRU[t]).join(", ")}
      </p>
    </div>
  );
}
