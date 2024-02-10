import { notFound } from "next/navigation";

import { getGroupIds } from "@acme/db";
import { WeekDaysRU } from "@acme/utils";

// import { HomeGroupBadge } from "~/components/home-group-badge";
import { HomeGroupButton } from "~/components/home-group-button";
import { Meetings } from "~/components/meetings";
import { ShowPhotoButton } from "~/components/show-photo-button";
import { SingleGroupMap } from "~/components/single-group-map";
import { api } from "~/trpc/server";

export async function generateStaticParams() {
  const ids = (await getGroupIds()) ?? [];
  return ids.map(({ id }) => ({ id }));
}

export default async function GroupPage({
  params,
}: {
  params: { id: string; searchParams: URLSearchParams };
}) {
  const group = await api.group.byId({ id: params.id });
  const location = await api.location.byId({
    id: group!.address!.location!.id,
  });
  if (!group) notFound();
  // TODO: Implement share button + link + copy to clipboard

  return (
    <div className="container pb-24">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            {group.name}
            <HomeGroupButton id={group.id} />
          </h2>
          <div className="flex flex-row">
            <p>{`${group.address?.city}, ${group.address?.street}`}</p>
            {group.address?.photoUrl && (
              <ShowPhotoButton
                imageSrc={group.address?.photoUrl}
                alt={`Группа ${group.name}, ${group.address?.city}, ${group.address?.street}`}
              />
            )}
          </div>
          <p className="text-sm">
            {group.address?.comments && group.address?.comments}
          </p>
          <p className="text-sm">
            {group.address?.transport && group.address?.transport}
          </p>
          <div className="h-96 w-full">
            <SingleGroupMap name={group.name} location={location} />
          </div>

          {group.days.map((day) => {
            return (
              <div key={day.weekday} className="flex flex-col gap-4">
                <hr />
                <h2 className="text-xl">{WeekDaysRU[day.weekday]}</h2>
                <div className="flex flex-col gap-4">
                  {day.meetings && day.meetings.length > 0 && (
                    <Meetings data={day.meetings} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
