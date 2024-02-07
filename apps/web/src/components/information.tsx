import type { RouterOutputs } from "@acme/api";

export function Information({
  data,
}: {
  data: Omit<RouterOutputs["group"]["all"][number], "days">;
}) {
  const { address, name } = data;
  return (
    <div className="flex flex-row rounded-lg bg-muted p-4">
      <div className="flex-grow">
        <h2 className="text-xl font-medium text-primary">{name}</h2>
        <p>{address?.city}</p>
        <p>{address?.street}</p>
        <p>{address?.comments}</p>
      </div>
    </div>
  );
}
