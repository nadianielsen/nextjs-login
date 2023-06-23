import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-y-10">
      <h1>This is the welcome page</h1>
      <Link href={"/login"}>Log in!</Link>
    </main>
  )
}
