import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { TableDataInformation } from "../components/TableDataInformation";
import { ButtonAddInformation } from "../components/ButtonAddInformation";
import { ChartSalarialTendency } from "../components/ChartSalarialTendency/ChartSalarialTendency";

export default async function DashboardPage() {
  const session = await getServerSession();

  if (!session || !session.user?.email) {
    redirect("/");
  }

  const user = await db.user.findUnique({
    where: {
      email: session?.user.email,
    },
    include: {
      peopleInformation: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!user || !user.peopleInformation) {
    redirect("/");
  }

  return (
    <div className="gap-4 w-full">
      {/* <div className="h-[300px]">
        <ChartSalarialTendency data={user.peopleInformation} />
      </div> */}
      <div className="space-y-4">
        <div className="flex justify-between">
          <h1 className="flex items-center font-semibold text-xl">
            Personal information
          </h1>
          <ButtonAddInformation userId={user.id} />
        </div>
        <TableDataInformation data={user.peopleInformation} />
      </div>
    </div>
  );
}
