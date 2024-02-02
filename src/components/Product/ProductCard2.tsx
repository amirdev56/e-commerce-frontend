import Image from "next/image";
import { ProductDataType } from "../CustomComponent/Tabs";

export const ProductCard2 = ({
  title,
  description,
  mainImage,
}: ProductDataType) => {
  return (
    <div className="w-[350px] h-[420px] bg-white m-[20px] shadow-green shadow-md">
      <div className="w-full h-[320px] relative overflow-hidden group">
        <div className="w-full h-full transition-transform transform-gpu group-hover:scale-105">
          <Image src={mainImage} alt={"product image"} fill />
        </div>
        <div className="absolute top-[100px] w-full group-hover:flex hidden items-center flex-col"></div>
      </div>
      <div className="text-start pt-[18px] px-[30px]">
        <div className="text-[23px] font-[900] leading-6">{title}</div>
        <div className="text-[16px] font-[400] pt-[12px] flex items-center">
          {description}
        </div>
      </div>
    </div>
  );
};
