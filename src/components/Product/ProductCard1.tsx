import Image from "next/image";
import { ProductDataType } from "../CustomComponent/Tabs";
import { LinkButton } from "../CustomComponent/LinkButton";

const LinksData = [
  { label: "Shop Men", url: "/men" },
  { label: "Shop Women", url: "women" },
];

export const ProductCard1 = ({
  title,
  description,
  logo,
  mainImage,
}: ProductDataType) => {
  return (
    <div className="w-[350px] h-[428px] bg-white m-[20px] shadow-green shadow-md">
      <div className="w-full h-[320px] relative overflow-hidden group">
        <div className="w-full h-full transition-transform transform-gpu group-hover:scale-105">
          <Image src={mainImage} alt={"product image"} fill />
        </div>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
        <div className="absolute top-[100px] w-full group-hover:flex hidden items-center flex-col">
          {LinksData.map((item, index) => (
            <LinkButton
              key={index}
              label={item.label}
              url={item.label}
              classes={"w-2/3 my-[10px] p-[15px]"}
            />
          ))}
        </div>
      </div>
      <div className="text-start pt-[18px] px-[30px]">
        <div className="border-b pb-[9px] text-[23px] font-[900] leading-6">
          {title}
        </div>
        <div className="text-[16px] font-[400] pt-[12px] flex items-center">
          {logo && (
            <div className="">
              <img style={{ width: "30px", marginRight: "10px" }} src={logo} />
            </div>
          )}
          <div className="">{description}</div>
        </div>
      </div>
    </div>
  );
};
