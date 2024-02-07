import type { RouterOutputs } from "@acme/api";

export function Address(props: {
  address: RouterOutputs["group"]["all"][number]["address"];
}) {
  return (
    <div className="flex flex-row rounded-lg bg-muted p-4">
      <div className="flex-grow">
        <h2 className="text-xl font-medium text-primary">
          {props.address?.city}
        </h2>
        <p>{props.address?.state}</p>
        <p>{props.address?.street}</p>
        <p>{props.address?.comments}</p>
      </div>
    </div>
  );
}
