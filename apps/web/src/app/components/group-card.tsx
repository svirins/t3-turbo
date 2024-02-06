import type { RouterOutputs } from "@acme/api";

import { Address } from "~/app/components/address";
import { DaysList } from "~/app/components/days-list";

export function GroupCard(props: {
  group: RouterOutputs["group"]["all"][number];
}) {
  const { name, days, address } = props.group;
  // const utils = api.useUtils();

  return (
    <div className="flex flex-col rounded-lg bg-muted p-4">
      <div className="flex-grow">
        <h2 className="text-xl font-medium text-primary">{name}</h2>
      </div>
      <Address address={address} />
      <DaysList days={days} />
    </div>
  );
}
