import React, { FC, MouseEventHandler, ReactElement } from "react";

type Props = {
  active: boolean;
  selectTab: MouseEventHandler<HTMLButtonElement>;
  children: String;
};

const TabButton: FC<Props> = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
