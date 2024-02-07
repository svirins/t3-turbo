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
function Meeting({
  data,
}: {
  data: RouterOutputs["group"]["all"][number]["days"][number]["meetings"][number];
}) {
  const start = format(data.start, "h:mm a");
  const end = format(data.end, "h:mm a");
  return (
    <div className="flex flex-row  p-4">
      <div className="">
        <p>
          <span className="">{start}</span>~<span className="">{end}</span>
        </p>
        <p className="">{data.topics.join(", ")}</p>
      </div>
    </div>
  );
}
