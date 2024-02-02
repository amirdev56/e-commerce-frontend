import Image from "next/image";
import image1 from "../../public/banner-1.jpg";
import image2 from "../../public/banner-2.jpg";
import Link from "next/link";
import { FavouriteProducts } from "@/components/Product/favouriteProducts";
import { LinkButton } from "@/components/CustomComponent/LinkButton";
import Carousel from "@/components/CustomComponent/Carousal";
import { NewArrivals } from "@/components/Product/NewArrivals";

const bannerButtons = [
  { label: "Shop Men", url: "/men" },
  { label: "Shop Women", url: "/women" },
];

export default function Home() {
  return (
    <>
      <div className="h-[calc(80vh-100px)] px-[72px] pt-[36px] mb-[36px] flex relative justify-center overflow-hidden">
        <div className="w-1/2 relative">
          <Image src={image1} alt={"landing page image 1"} fill />
        </div>
        <div className="w-1/2 min-h-full relative">
          <Image src={image2} alt={"landing page image 2"} fill />
        </div>

        {/* Link on top banner */}
        <div className="bg-white absolute top-1/3 left-[72px] py-[60px] pr-[72px] text-[#212a2f] flex flex-col">
          <h1 className="uppercase mb-[24px] text-[16px] font-[700] leading-6 tracking-[2px]">
            Featured
          </h1>
          <Link
            href={"/collections/new-arrivals"}
            className="mb-[5px] hover:underline"
          >
            New Arrivals
          </Link>
          <Link
            href={"/collections/women"}
            className="mb-[5px] hover:underline"
          >
            Women's Shoes
          </Link>
          <Link href={"/collections/men"} className="mb-[5px] hover:underline">
            Men's Shoes
          </Link>
        </div>

        {/* Centeral Content on top banner */}
        <div className="absolute top-1/2 max-w-3/4">
          <div className="text-white text-[48px] text-center font-[700]">
            Take That, Weather
          </div>
          <div className="text-white text-[16px] text-center font-[500]">
            Water-repellent Mizzles are cozy inside and extra grippy outside.
          </div>

          {/* Buttons on top banner */}
          <div className="flex justify-around mt-[10px]">
            {bannerButtons.map((item, index) => (
              <LinkButton
                key={index}
                label={item.label}
                url={item.url}
                classes={
                  "w-1/3 px-[18px] py-[12px] text-[14px] flex items-center justify-center"
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div className="pb-[28px]">
        <FavouriteProducts />
      </div>

      {/* ---Banner image under favourite section--- */}
      <div className="relative h-[600px] w-[calc(100%+32px)] mx-[-16px] mb-[48px]">
        <Image
          src={
            "http://cdn.allbirds.com/image/upload/f_auto,q_auto,w_3840/cms/6mR3Qbs4ctkbbJbWoeVEM3/9509c55d3d667b2fcb416c43984c2e73/24Q1_Energy_LakeM_Site_Secondary_Hero_Desktop_3841___2346.jpg"
          }
          fill
          alt={"banner image"}
        />
      </div>

      <div className="w-[80%] mx-auto pb-[120px]">
        <div className="mx-auto w-1/2">
          <div className="mb-[18px] text-[32px] font-[700] leading-5 tracking-[.5px] text-center">
            Weather The Storm
          </div>
          <div className="text-center mb-[18px]">
            Wintry mix? No problem. Our super cozy, water-repellent shoes were
            made to keep your feet warm and dry.
          </div>
          <div className="flex justify-center">
            {bannerButtons.map((item, index) => (
              <LinkButton
                {...item}
                classes="mx-[10px] bg-[#212a2f] hover:bg-white text-white hover:text-[#212a2f] border-[2px] border-[#212a2f] px-[16px] py-[11px]"
              />
            ))}
          </div>
        </div>
      </div>

      {/* new Arrival Section */}
      <div className="w-[calc(100%+32px)] mx-[-16px]">
        <NewArrivals />
      </div>
    </>
  );
}
