import { notFound } from "next/navigation";

import { getGroupIds } from "@acme/db";

import { api } from "@/trpc/server";
import { Suspense } from "react";
import { SingleGroup } from "@/components/table/single-group";

export async function generateStaticParams() {
  const ids = (await getGroupIds()) ?? [];
  return ids.map(({ id }) => ({ id }));
}

export default async function GroupPage({
  params,
}: {
  params: { id: string; searchParams: URLSearchParams };
}) {
  const data = api.group.byId({ id: params.id });
  // const location = await api.location.byId({
  //   id: group!.address!.location!.id,
  // });
  if (!data) notFound();
  // TODO: Implement share button + link + copy to clipboard
  // TODO: Implement: full-month schedule
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex flex-col items-start gap-2">
        <Suspense fallback={<p>Loading ...</p>}>
          <SingleGroup data={data} />
        </Suspense>
      </div>
    </section>
  )
}