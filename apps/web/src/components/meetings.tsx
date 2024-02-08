import type { RouterOutputs } from "@acme/api";
import { format } from "@acme/utils";

export function Meetings({
  data,
}: {
  data: RouterOutputs["group"]["all"][number]["days"][number]["meetings"];
}) {
  // TODO: Implement 'This is my meeting' badge
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
  const start = format(data.start, "H:mm");
  const end = format(data.end, "H:mm");
  return (
    <div className="flex flex-row">
      <p className="text-semibold font-mono">{`${start} -> ${end}`}</p>
      {data.topics.map((topic, index) => {
        return (
          <div key={index} className="badge badge-outline">
            {topic}
          </div>
        );
      })}
    </div>
  );
}
