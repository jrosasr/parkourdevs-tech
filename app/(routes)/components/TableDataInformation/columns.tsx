"use client";

import { ColumnDef } from "@tanstack/react-table";
import { PersonalInformation } from "@prisma/client";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<PersonalInformation>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 w-4 h-4" />
        </Button>
      );
    },
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
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Salary
          <ArrowUpDown className="ml-2 w-4 h-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <span>${row.original.salary?.toLocaleString("en-US")}</span>;
    }
  },
  {
    accessorKey: "address",
    header: "Address",
  },
];
