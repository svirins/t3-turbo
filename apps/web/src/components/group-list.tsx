import { use } from "react";
import Link from "next/link";

import type { RouterOutputs } from "@acme/api";

import { HomeGroupBadge } from "~/components/home-group-badge";
import { Meetings } from "~/components/meetings";
import { mapOrder } from "~/lib/mapOrder";

export function GroupList({
  data,
  sortedByDistanceIds,
  isToday,
}: {
  data: Promise<RouterOutputs["group"]["byCitiesAndByWeekday"]>;
  sortedByDistanceIds: Promise<RouterOutputs["location"]["closestGroups"]>;
  isToday: boolean;
}) {
  const initialData = use(data);
  const initialSortedByDistanceIds = use(sortedByDistanceIds).map(
    (item) => item.groupId,
  );

  if (initialData.length === 0) {
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="pb-4 text-7xl font-bold">🙅‍♀️</h1>
            <h1 className="text-5xl font-bold">Группы не найдены</h1>
            <p className="py-6">
              Пока не найдены. Попробуй изменить фильтры поиска. Или, возможно,
              ты сможешь внести свой вклад и такая группа появится.
            </p>
            <Link href="/" className="btn btn-primary">
              Все группы
            </Link>
          </div>
        </div>
      </div>
    );
  }
  const sortedData = mapOrder(initialData, initialSortedByDistanceIds, "id");

  return (
    <div className="flex w-full flex-col gap-4">
      {sortedData.map(({ days, ...rest }) => {
        return (
          <Link
            key={rest.id}
            className="card bg-base-200 hover:bg-base-300 transform shadow-xl duration-100 ease-in-out hover:shadow-2xl"
            href={`/group/${rest.id}`}
          >
            <div className="card-body p-6">
              <h2 className="card-title text-2xl">
                {rest.name}
                <HomeGroupBadge id={rest.id} />
              </h2>
              <div className="flex flex-row items-baseline">
                <p>{`${rest.address?.city}, ${rest.address?.street}`}</p>
              </div>
              <hr />
              <Meetings data={days[0]!.meetings} isToday={isToday} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
