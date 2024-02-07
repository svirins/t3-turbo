import type { RouterOutputs } from "@acme/api";

import { GroupCard } from "~/app/components/group-card";

export function GroupList(props: { groups: RouterOutputs["group"]["all"] }) {

  if (props.groups.length === 0) {
    return (
      <div className="relative flex w-full">
        <p className="text-white">No groups yet</p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {props.groups.map((group) => {
        return <GroupCard key={group.id} group={group} />;
      })}
    </div>
  );
}
