'use server'

import { supabaseClient } from "@/utils/supabase/client";
import { PrismaClient } from "@prisma/client"
import { SupabaseClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

export async function GetUsers() {

    // const prisma = new PrismaClient()

    try {
        // const users = await prisma.user.findMany()
        const { data } = await supabaseClient.from('todos').select('*')
        console.log('created');
        console.log(data);

        return data
    } catch (err) {
        console.log(err);
    }
}

export async function AddUser(formData: FormData) {

    const name = formData.get('name') as string

    try {
        const { data } = await supabaseClient.from('todos').insert({ title: name })
        console.log('created');
        console.log(data);
        revalidatePath('/')
    } catch (err) {
        console.log(err);
    }
}

export async function DeleteUser(id: number) {

    try {
        const user = await supabaseClient.from('todos').delete().eq('id', id)
        console.log('deleted');

        revalidatePath('/')
    } catch (err) {
        console.log(err);
    }
}