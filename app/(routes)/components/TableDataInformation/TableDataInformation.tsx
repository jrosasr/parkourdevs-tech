import { PersonalInformation } from "@prisma/client";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export type TableDataInformationProps = {
    data: PersonalInformation[]
}

export async function TableDataInformation(props: TableDataInformationProps) {
    const { data } = props
    
    return (
        <div className="w-full">
            <DataTable columns={columns} data={data} />
        </div>
    );
}