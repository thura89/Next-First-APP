import Link from "next/link";

export default function Header() {
  return (
    <div className=" absolute w-full z-10 text-white">
      <nav className=" container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={"/"} className=" font-bold text-3xl">
          Next
        </Link>
        <div className=" space-x-4 text-xl">
          <Link href={"/performance"}>Performance</Link>
          <Link href={"/reliability"}>Reliability</Link>
          <Link href={"/scale"}>Scale</Link>
        </div>
      </nav>
    </div>
  );
}
