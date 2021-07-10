import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  children: JSX.Element;
  isActiveInSubpaths?: boolean;
}

const NavLink = ({ href, children, isActiveInSubpaths }: Props) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      {React.cloneElement(children, {
        className:
          isActiveInSubpaths === true
            ? "active pb-4"
            : asPath === href
            ? "active pb-4"
            : null,
      })}
    </Link>
  );
};

export default NavLink;
