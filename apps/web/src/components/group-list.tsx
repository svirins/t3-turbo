import { use } from "react";
import Link from "next/link";

import type { RouterOutputs } from "@acme/api";

import { GroupSkeleton } from "~/components/group-skeleton";
import { Meetings } from "~/components/meetings";

export function GroupList({
  data,
}: {
  data: Promise<RouterOutputs["group"]["all"]>;
}) {
  const initialData = use(data);

  // TODO: Consider using `useSuspenseQuery` here
  if (initialData.length === 0) {
    return (
      <div className="flex w-full flex-col gap-4">
        <GroupSkeleton />
        <GroupSkeleton />
        <GroupSkeleton />
        <p>No meetings today</p>
      </div>
    );
  }
  // TODO: Consider adding 'MyHomeGroup' badge to the group + retreive from localstorage ? or personal cabinet
  return (
    <div className="flex w-full flex-col gap-4">
      {initialData.map(({ days, ...rest }) => {
        return (
          <div key={rest.id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                {rest.name}
                <div className="badge badge-secondary badge-outline">
                  Домашняя
                </div>
              </h2>
              <div className="flex flex-row">
                <p>{`${rest.address?.city}, ${rest.address?.street}`}</p>
                <Link
                  href={`/groups/${rest.id}`}
                  className="btn btn-xs btn-outline btn-circle"
                  role="button"
                >
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
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </Link>
              </div>
              <p className="text-sm">
                {rest.address?.comments && rest.address?.comments}
              </p>
              <hr />
              <Meetings data={days[0]!.meetings} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
