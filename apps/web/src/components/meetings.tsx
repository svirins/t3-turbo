"use client";

import type { RouterOutputs } from "@acme/api";
import { getHoursFromDate, TopicsRU } from "@acme/utils";

import { useMySchedule } from "~/lib/hooks/useLocalStorage";

export function Meetings({
  data,
}: {
  data: RouterOutputs["group"]["all"][number]["days"][number]["meetings"];
}) {
  // TODO: Implement 'passed' / 'incoming' badge
  // TODO: Implement share button + link + copy to clipboard
  const mySchedule = useMySchedule();
  return (
    <div className="flex flex-col gap-4">
      {data.map((meeting) => (
        <Meeting
          key={meeting.id}
          data={meeting}
          isScheduled={!!mySchedule?.find((id) => id === meeting.id)}
        />
      ))}
    </div>
  );
}
// TODO: topic color Open, Work, Speaker - different colors
function Meeting({
  data,
  isScheduled,
}: {
  data: RouterOutputs["group"]["all"][number]["days"][number]["meetings"][number];
  isScheduled: boolean;
}) {
  const start = getHoursFromDate(data.start);
  const end = getHoursFromDate(data.end);
  return (
    <div className="flex flex-row">
      <p className="text-bold font-mono">{`${start} -> ${end}`} </p>
      {isScheduled && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      )}

      <p className="text-semibold text-right">
        {data.topics.map((t) => TopicsRU[t]).join(", ")}
      </p>
    </div>
  );
}
