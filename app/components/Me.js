import Image from "next/image";
import Link from "next/link";
import React from "react";
// import GithubLogo from "public/GithubLogo.svg";

const Me = () => {
  return (
    <div className="flex w-full justify-center meCard flex-1 flex-col p-6 mb-20 md:mb-0 text-black  bg-white">
      <img className="rounded-full mb-6 w-20" src="/Avatar.svg" alt="me" />
      <h2 className="font-bold">Fidelis Wachira</h2>
      <p className="text-gray-400">Software Engineer</p>
      <p className="flex gap-2 p-2 pl-0 mb-10 ">
        <img className="w-5" src="/Location.gif" alt="icon" />
        Nairobi, Kenya
      </p>

      <Link
        href={"/contact"}
        className="text-white text-center mb-5 h-20 text-3xl rounded-2xl p-4 bg-orange-600"
      >
        Contact
      </Link>
      <button className=" flex hover:cursor-pointer justify-evenly mb-5 p-4 rounded-2xl bg-page-bg-color h-20 ">
        <Link href={"https://github.com/itsfidelgray"}>
          <img
            className="w-12 hover:scale-105 "
            src={"GithubLogo.svg"}
            alt="github"
          />
        </Link>
        <Link href={"https://linkedin.com/in/fideliskaruri"}>
          <img
            className="w-12 hover:scale-105 "
            src="/LinkedInLogo.svg"
            alt="linkedIn"
          />
        </Link>
        <Link href="https://x.com/fideliskaruri">
          <img className="w-12 hover:scale-105" src="XLogo.svg" alt="X" />
        </Link>
      </button>
    </div>
  );
};

export default Me;
