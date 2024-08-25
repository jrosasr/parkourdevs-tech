import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    try {
        const {
            name,
            dni,
            phone,
            address,
            salary,
            userId,
        } = await req.json();

        if (!name || !dni || !phone || !address || !salary || !userId) {
            return new NextResponse('Fields are required', {
                status: 422
            });
        }
        const element = await db.personalInformation.create({
            data: {
                name,
                dni: parseInt(dni.split('.').join('')),
                phone,
                address,
                salary: parseFloat(salary.split(',').join('')),
                userId,
            }
        })

        return NextResponse.json(element);
    } catch (error) {
        return new NextResponse('Internal Error', {
            status: 500
        });
    }
}