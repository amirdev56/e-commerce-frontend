// import all the icons here and then use in application

import { GoSearch } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { MdHelpOutline } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";

type PropsType = {
  iconName: string;
  iconProps: { className: string; size: number };
};

export const CustomIcon = ({ iconName, iconProps }: PropsType) => {
  switch (iconName) {
    case "SearchIcon":
      return <GoSearch {...iconProps} />;
    case "UserIcon1":
      return <FiUser {...iconProps} />;
    case "HelpIcon1":
      return <MdHelpOutline {...iconProps} />;
    case "CartIcon":
      return <BsCart2 {...iconProps} />;
    default:
      <FiUser {...iconProps} />;
  }
};
