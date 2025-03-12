'use client'

import { DeleteUser } from "@/actions/UserActions"

export default function UserItem({ id, name }: { id: number, name: string }) {
    return <div className="flex gap-2 items-center border p-4 rounded">
        <p className="my-2 font-semibold">{name}</p>

        <button className="px-2 py-1 bg-red-600 text-white font-semibold rounded" onClick={() => DeleteUser(id)}>Delete</button>
    </div>
}