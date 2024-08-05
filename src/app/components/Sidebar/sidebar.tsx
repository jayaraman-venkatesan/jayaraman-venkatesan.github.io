"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./sidebar.css";

export default function SideBar() {
  const pathname = usePathname();
  return (
    <div className="flex w-full lg:w-fit lg:flex-col items-start justify-start sm:justify-between p-5 lg:px-10 lg:pb-10 lg:justify-center">
      <CustomLink isActive={pathname === "/"} text="Home" linkPath="/" />
      <CustomLink
        isActive={pathname === "/education"}
        text="Education"
        linkPath="/education"
      />
      <CustomLink
        isActive={pathname === "/work-experience"}
        text="Experience"
        linkPath="/work-experience"
      />
      <CustomLink
        isActive={pathname === "/academic-projects"}
        text="Projects"
        linkPath="/academic-projects"
      />
      <CustomLink
        isActive={pathname === "/Blog"}
        text="Blog"
        linkPath="/Blog"
      />
    </div>
  );
}

function CustomLink({
  isActive,
  text,
  linkPath,
}: {
  isActive: Boolean;
  text: string;
  linkPath: string;
}) {
  return (
    <Link
      className={`link p-2 border-b-4 lg:border-l-4 lg:border-b-0 border-transparent lg:flex ${
        isActive
          ? "active font-bold border-b-primary dark:border-b-primary-dark lg:border-b-transparent lg:border-l-primary lg:dark:border-l-primary-dark text-xl text-primary dark:text-primary-dark"
          : ""
      }`}
      href={linkPath}
    >
      {text}{" "}
      {
        // isActive && (
        //     <span className="hidden w-5 lg:flex">
        //         -&gt;
        //     </span>
        // )
      }
    </Link>
  );
}
