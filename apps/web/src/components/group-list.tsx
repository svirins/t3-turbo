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
                  href={`/map?groupId=${rest.id}`}
                  className="btn btn-sm btn-outline"
                  role="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  На карте
                </Link>
              </div>
              <p className="text-sm">
                {rest.address?.comments && rest.address?.comments}
              </p>
              <hr />
              <Meetings data={days[0]!.meetings} />
              <div className="card-actions justify-end">
                <Link
                  href={`/groups/${rest.id}`}
                  className="btn btn-sm btn-outline"
                  role="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                  </svg>
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
