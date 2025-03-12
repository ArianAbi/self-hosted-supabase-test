import { supabaseClient } from "@/utils/supabase/client";
import { AddUser } from "@/actions/UserActions";
import UserItem from "./components/user";


export default async function Home() {

  const { data } = await supabaseClient.from('todos').select('*')

  return (
    <div className="p-5">
      <h2>Self-Hosted Supabase Test</h2>

      <form action={AddUser}>
        <label className="block mt-5 text-base">todo title</label>
        <input className="border rounded py-1" name="name" type="text" />
        <button className="bg-emerald-600 text-white font-semibold px-2 py-1 rounded ml-4">Create</button>
      </form>

      <h2 className="mt-4">List of TODOS</h2>
      <div className="flex flex-col gap-4">
        {data?.map((todo) => {
          return <UserItem key={todo.id} name={todo.title} id={todo.id} />
        })}
      </div>
    </div>
  );
}
