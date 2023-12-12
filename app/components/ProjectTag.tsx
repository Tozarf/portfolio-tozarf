import React, { FC } from "react";

type Props = {
  name: string;
  isSelected: boolean;
  onClick: any; //! UPDATE with real type
};

const ProjectTag: FC<Props> = ({ name, isSelected, onClick }) => {
  const buttonStyles = isSelected
    ? "text-white border-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      onClick={() => onClick(name)}
      className={`rounded-full border-2 ${buttonStyles} px-4 py-1 sm:px-6 sm:py-3 text-xl cursor-pointer`}
    >
      {name}
    </button>
  );
};

export { ProjectTag };
