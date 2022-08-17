import Link from "next/link";
import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";
import CollapsibleMenu from "./MenuButton";

const LinkItem: React.FC<PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => {
  const { pathname } = useRouter();
  const active = pathname.split("/")[1] === href.slice(1);
  return (
    <Link href={href}>
      <li
        className={` text-md flex cursor-pointer items-center px-3 transition-colors hover:bg-white hover:text-råsa ${
          active ? "bg-white text-råsa" : ""
        } `}
      >
        <span>{children}</span>
      </li>
    </Link>
  );
};

const NavMenu: React.FC = () => {
  return (
    <div>
      <div className="flex h-full items-center justify-center lg:hidden">
        <CollapsibleMenu />
      </div>
      <ul className=" hidden h-full items-stretch justify-between lg:flex">
        <LinkItem href="/">Hem</LinkItem>
        <LinkItem href="/possibilities">Möjligheter</LinkItem>
        <LinkItem href="/news">Aktuellt</LinkItem>
        <LinkItem href="/order">Beställ</LinkItem>
        <LinkItem href="/contact">Kontakt</LinkItem>
        <LinkItem href="https://dsek.se">Om D-sektionen</LinkItem>
      </ul>
    </div>
  );
};

export default NavMenu;
