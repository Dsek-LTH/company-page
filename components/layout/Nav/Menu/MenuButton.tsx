import Link from "next/link";
import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";

const MenuButton: React.FC<{ isOpen: boolean; onClick: () => void }> = ({
  isOpen,
  onClick,
}) => {
  return (
    <button onClick={onClick} className="-m-2 p-2">
      Menu
    </button>
  );
};

const LinkItem: React.FC<PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => {
  const { pathname } = useRouter();
  const active = pathname.split("/")[1] === href.slice(1);
  return (
    <Link href={href}>
      <li
        className={` block hover:bg-white hover:text-råsa ${
          active ? "bg-white text-råsa" : ""
        } `}
      >
        <span>{children}</span>
      </li>
    </Link>
  );
};

const LinkList = () => {
  return (
    <ul className="absolute top-full right-0 bg-lila p-4">
      <LinkItem href="/">Hem</LinkItem>
      <LinkItem href="/possibilities">Möjligheter</LinkItem>
      <LinkItem href="/news">Aktuellt</LinkItem>
      <LinkItem href="/order">Beställ</LinkItem>
      <LinkItem href="/contact">Kontakt</LinkItem>
      <LinkItem href="https://dsek.se">Om D-sektionen</LinkItem>
    </ul>
  );
};

const CollapsibleMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <MenuButton isOpen={isOpen} onClick={() => setIsOpen((curr) => !curr)} />
      {isOpen && <LinkList />}
    </>
  );
};

export default CollapsibleMenu;
