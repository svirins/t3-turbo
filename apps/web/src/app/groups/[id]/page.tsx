"use server";

import { notFound } from "next/navigation";

import { prisma } from "@acme/db";

export async function generateStaticParams() {
  const ids = await prisma.group.findMany({ select: { id: true } });
  return ids.map((id) => ({ slug: id }));
}

export default async function GroupPage({
  params,
}: {
  params: { id: string; searchParams: URLSearchParams };
}) {
  const group = await prisma.group.findUnique({ id: params.id });
  if (!group) notFound();

  return (
    <div className="mb-12 md:mb-24">
      <p>{group.name}</p>
    </div>
  );
}
