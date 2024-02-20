'use server'

export async function deleteGroup({ id }: { id: number }) {
  console.log(`Deleting group with id: ${id}`)
  return null
}