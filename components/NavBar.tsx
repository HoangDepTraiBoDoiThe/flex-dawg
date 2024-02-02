"use client";

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const session = {};

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src={"/logo.svg"} width={115} height={45} alt={"logo"} />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link key={link.key} href={link.href}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center gap-4">
        {session ? (
          <div>
            <Link href={`/create-project`}>Share works</Link>
          </div>
        ) : (
          <div>
            <AuthProviders />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
