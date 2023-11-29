import React, { FC } from "react";
import NavLink from "./NavLink";
type Props = {
  links: { title: string; path: string }[];
};

const MenuOverlay: FC<Props> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map(({ path, title }, idx) => (
        <li key={idx}>
          <NavLink href={path} title={title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
