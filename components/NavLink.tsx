import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  children: JSX.Element;
}

const NavLink = ({ href, children }: Props) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      {React.cloneElement(children, {
        className: asPath === href ? "active pb-4" : null,
      })}
    </Link>
  );
};

export default NavLink;
