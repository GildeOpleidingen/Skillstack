import { auth } from "@/auth";
import { redirect } from "next/navigation";

import Roadmap from "@/components/roadmap";
import AssignmentProfile from "@/components/assignment-profile";
import CodeEditor from "@/components/editor"

export default async function Home() {
  const session = await auth()

  if (!session?.user) {
    redirect("/login")
  }

  return (
    <section className="mx-auto w-full max-w-3xl bg-white p-6 dark:bg-black">
      <h1 className="text-xl font-semibold">Session</h1>
      <pre className="overflow-auto">
        {JSON.stringify(session, null, 2)}
      </pre>

      <hr className="my-6" />

      <h2 className="mb-4 text-lg font-semibold">Components</h2>
      <Roadmap />
      <AssignmentProfile />
      <CodeEditor exerciseId={5} code="let c = 10;" />
    </section>
  )
}
