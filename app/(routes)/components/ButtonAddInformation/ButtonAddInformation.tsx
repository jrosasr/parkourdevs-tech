import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormAddInformation } from "../FormAddInformation";

export async function ButtonAddInformation(props: { userId: number }) {
  const { userId } = props;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:w-auto h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Register information</DialogTitle>
        </DialogHeader>
        <div className="flex gap-4 py-4">
          <FormAddInformation userId={userId} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
