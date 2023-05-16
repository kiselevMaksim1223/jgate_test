import Link from "next/link";
import s from "@/styles/main-page.module.scss";

export default function Home() {
  return (
    <section className={s.container}>
      <Link href="/card">Just click here to see card component</Link>
    </section>
  )
}
