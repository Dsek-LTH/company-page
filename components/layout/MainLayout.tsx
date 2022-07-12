import React, { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const LinkItem: React.FC<PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => {
  const { pathname } = useRouter();
  const active = pathname.split("/")[1] === href.slice(1);
  return (
    <Link href={href}>
      <li
        className={`cursor-pointer py-8 px-3 text-xl transition-colors hover:bg-white hover:text-råsa ${
          active ? "bg-white text-råsa" : ""
        } `}
      >
        {children}
      </li>
    </Link>
  );
};

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-screen w-full">
      <nav className="relative flex justify-between gap-4 bg-lila px-16 font-bold  text-white shadow-lg ">
        <div className="relative flex items-center pl-[calc(120px+theme(space.8))]">
          <div className="absolute top-1 left-0">
            <Image
              src="/images/logo/sigil.svg"
              alt="d-sektionen logo"
              width={120}
              height={120}
            />
          </div>
          <div className="inline-block text-3xl ">D-sektionen</div>
        </div>
        <ul className="flex justify-between">
          <LinkItem href="/">Hem</LinkItem>
          <LinkItem href="/possibilities">Möjligheter</LinkItem>
          <LinkItem href="/news">Aktuellt</LinkItem>
          <LinkItem href="/order">Beställ</LinkItem>
          <LinkItem href="/contact">Kontakt</LinkItem>
          <LinkItem href="https://dsek.se">Om D-sektionen</LinkItem>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
