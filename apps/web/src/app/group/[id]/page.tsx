import { notFound } from "next/navigation";

import { getGroupIds } from "@acme/db";
import { WeekDaysRU } from "@acme/utils";

import { HomeGroupButton } from "@/components/home-group-button";
import { Meetings } from "@/components/meetings";
import { ShowPhotoButton } from "@/components/show-photo-button";
import { SingleGroupMap } from "@/components/single-group-map";
import { api } from "@/trpc/server";

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
  // TODO: Implement: full-month schedule
  return (
    <div className="pb-24">
      <div className="card bg-base-200 shadow-2xl">
        <div className="card-body p-4">
          <div className="flex flex-row align-middle">
            <h2 className="card-title text-2xl">{group.name}</h2>
            <HomeGroupButton id={group.id} />
          </div>
          <div className="flex flex-row">
            <p>{`${group.address?.city}, ${group.address?.street}`}</p>
            {group.address?.photoUrls &&
              group.address?.photoUrls.length > 0 && (
                <ShowPhotoButton
                  imageSrcs={group.address?.photoUrls}
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
              day.meetings &&
              day.meetings.length > 0 && (
                <div key={day.weekday} className="flex flex-col gap-4">
                  <hr />
                  <h2 className="text-lg font-medium">
                    {WeekDaysRU[day.weekday]}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {day.meetings && day.meetings.length > 0 && (
                      <Meetings data={day.meetings} />
                    )}
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}
