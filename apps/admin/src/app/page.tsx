import { Suspense } from "react"
import { api } from "@/trpc/server"
import { GroupsTable } from "@/components/table/groups-table"

export default async function IndexPage() {
  const data = api.group.allGroups()
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-start gap-2">
        <Suspense fallback={<p>Loading ...</p>}>
          <GroupsTable groups={data} />
        </Suspense>
      </div>
    </section>
  )
}
