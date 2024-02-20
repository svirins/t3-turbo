"use client"
import { Form } from '@/components/ui/form'
import { SubmitHandler, useForm } from 'react-hook-form'
import Link from "next/link"

import { use } from "react"
import * as React from "react"
import type { RouterOutputs } from "@acme/api"
import { deleteGroup, updateGroup } from "@/lib/actions"
import { CreateGroupSchema } from "@acme/validators"

function deleteGroupHandler(e: React.MouseEvent<HTMLElement>, id: number) {
  e.stopPropagation()
  deleteGroup({ id })
}

export function SingleGroup({ data }: { data: Promise<RouterOutputs["group"]["byId"]> }) {
  const groupData = use(data)
  return (
    <p>G</p>
  )

 }