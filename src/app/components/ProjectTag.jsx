import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = `rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${
    isSelected ? "text-white border-primary-500" : "text-[#ADB7BE] border-slate-600 hover:border-white"
  }`;
  
  return (
    <button className={buttonStyles} onClick={() => onClick(name)}>
      {name} {/* 显示项目标签的名称 */}
    </button>
  );
};
export default ProjectTag;
