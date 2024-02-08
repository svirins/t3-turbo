import { notFound } from "next/navigation";

import { getGroupById, getGroupIds } from "@acme/db";

export async function generateStaticParams() {
  const ids = (await getGroupIds()) ?? [];
  return ids.map(({ id }) => ({ id }));
}

export default async function GroupPage({
  params,
}: {
  params: { id: string; searchParams: URLSearchParams };
}) {
  const group = await getGroupById(params.id);
  if (!group) notFound();
  // TODO: display map here
  return (
    <div className="mb-12 md:mb-24">
      <p>{group.name}</p>
    </div>
  );
}
