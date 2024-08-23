"use client"

import { ColumnDef } from "@tanstack/react-table"
import { PersonalInformation } from "@prisma/client"

export const columns: ColumnDef<PersonalInformation>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "dni",
    header: "DNI",
  },
  {
    accessorKey: "phone",
    header: "phone",
  },
  {
    accessorKey: "salary",
    header: "Salary",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
]