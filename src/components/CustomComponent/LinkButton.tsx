import Link from "next/link";

type PropTypes = { url: string; label: string; classes?: string };

export const LinkButton = ({ url, label, classes = "" }: PropTypes) => {
  return (
    <Link
      className={`uppercase bg-white hover:bg-[#212a2f]
			  text-[#212a2f] hover:text-white text-[16px] font-[600]
			  text-center rounded leading-6 tracking-[2px] ${classes}`}
      href={url}
    >
      {label}
    </Link>
  );
};
