import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="py-6 md:px-16 px-6 border-b-2 border-zinc-800 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={"/logo.png"} width={25} height={25} alt="logo" />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/about"
                className="hover:text-purple-400 duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-purple-400 duration-300"
              >
                Projects
              </Link>
            </li>
            {/* <li
                className="hover:text-purple-400 duration-300"
              >
                <ModeToggle/>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
}
