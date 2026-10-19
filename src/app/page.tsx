import Image from "next/image";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

import Sidebar from "@/components/Sidebar";
import Roadmap from "@/components/Roadmap";
import AssignmentProfile from "@/components/AssignmentProfile";
import CodeEditor from "@/components/Editor"

export default async function Home() {

        // Do authentication (see uhm auth.ts)
        const session = await auth();

        // Redirect user when no session, so you need to login
        if (!session?.user) {
                redirect("/login");
        }

        
        return (
                  <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black">
                            <header className="w-full bg-orange-50 px-6 py-4">
                              <div className="mx-auto flex w-full max-w-3xl items-center">
                                <Image
                                  src="/logo_big.png"
                                  alt="SkillStack"
                                  width={180}
                                  height={60}
                                  priority
                                  className="h-auto w-[180px]"
                                />
                              </div>
                            </header>
                         <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col bg-white p-6 dark:bg-black sm:items-start">
                                Session:
                                <pre>
                                {JSON.stringify(session, null, 2)}
                                </pre>
                                <hr />
                                Components:
                                { /* Components test and passing session to Sidebar */ }
                                <Sidebar session={session} />
                                <Roadmap />
                                <AssignmentProfile />
                                Pages:
                                <a href="/roadmap">Roadmap link to page</a>
                                <a href="/user" className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" >Database test!!</a>
                                <br />
                                <a href="/assessment" className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" >Assessments database test</a>
                                <hr />

                                { /* Test of code editor */ }
                                { /* Looking into howto pass props to the component */ }
                                <CodeEditor 
                                        exerciseId={5}
                                        code={"let c = 10;"}
                                />
                        </main>
                </div>
        );
}
