import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-around ">
      <Link href={"/experience"}>Experience</Link>
      <Link href={"/projects"}>Projects</Link>
      <Link href={"/aboutme"}>About me</Link>
    </nav>
  );
};

export default NavBar;
