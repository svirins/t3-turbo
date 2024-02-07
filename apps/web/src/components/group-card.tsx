import Link from "next/link";

import type { RouterOutputs } from "@acme/api";

import { Address } from "~/components/address";
import { DaysList } from "~/components/days-list";

export function GroupCard(props: {
  group: RouterOutputs["group"]["all"][number];
}) {
  const { id, name, days, address } = props.group;
  // const utils = api.useUtils();

  return (
    <div className="flex flex-col rounded-lg bg-muted p-4">
      <h4 className="text-lg text-primary">{name}</h4>
      <Link href={`/groups/${id}`}>Подробнее</Link>
      <Address address={address} />
      <DaysList days={days} />
    </div>
  );
}
