import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

export async function TableDataInformation() {
    // const session = await getServerSession()

    // if (!session || !session.user?.email) {
    //     redirect("/")
    //   }
    
    //   const user = await db.user.findUnique({
    //     where: {
    //       email: session?.user.email
    //     },
    //     include: {
    //       peopleInformation: {
    //         orderBy: {
    //           createdAt: "desc"
    //         }
    //       }
    //     }
    //   })
    
    //   if (!user || !user.peopleInformation) {
    //     redirect("/")
    //   }
    return (
        <div>TableDataInformation</div>
    );
}