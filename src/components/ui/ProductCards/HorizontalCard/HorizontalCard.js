import { FaArrowDown, FaChevronDown, FaStar } from "react-icons/fa6";
import pic1 from "../../../../assets/pic.png";
import Image from "next/image";
import { CiTrophy } from "react-icons/ci";
const HorizontalCard = () => {
  return (
    <div className="bg-white rounded-xl my-8 py-4 ">
      {/* card side section index no */}
      <div className="relative">
        <div className="absolute -top-8 -left-2 bg-org  py-2 px-4 rounded-r-lg">
          <p className="text-white text-xs flex gap-2 items-center ">
            <CiTrophy className="text-white  text-lg" />
            Best Choice
          </p>
        </div>
        <div className="absolute  -left-5 mt-4 bg-white  px-4 py-2 rounded-full border-[#E1E4E6] border-[1px]">
          2
        </div>
      </div>
      <div className="grid grid-cols-12  gap-2">
        {/* Img section */}

        <div className="  md:col-span-3  mx-auto flex items-center justify-center">
          <Image height={110} width={141} src={pic1} alt="" />
        </div>
        {/* details section */}
        <div className="md:col-span-6 mx-2">
          <div className=" ">
            <p className="text-darkLightText ">
              <span className="text-darkText font-bold">
                {" "}
                WixPro 72-Inch Responsive Website Builder-
              </span>
              Comprehensive Digital Platform Creation Tool, Streamlined Design
              Interface for Professional Websites and Online Stores (Black/Blue)
            </p>
            <h3 className="text-darkText font-bold py-2">Main highlights</h3>
            <p className="pl-3 text-darkLightText py-1.5">
              [What You Get]: Gain access to the SiteCraft design studio,
              featuring a robust selection of design elements, SEO optimization
              tools, and e-commerce integrations.
            </p>
            <button className="flex gap-2 items-center pl-1 pt-2 text-primary hover:text-blue-400 hover:underline">
              Show more <FaChevronDown />
            </button>
          </div>
        </div>
        {/* review and vew section */}
        <div className="md:col-span-3 mx-2 flex item-center flex-col justify-between">
          {/* rating section */}
          <div className="pb-4 ">
            <div className="rounded-b-xl bg-[#F3F9FF] px-4 -mt-4 pb-2 flex flex-col items-center justify-center w-[135px] mx-auto">
              <p className="text-[#074786]  pt-4 pb-2 text-[32px]">9.8</p>
              <p className="text-[#074786] text-sm"> Exceptional</p>
              <div className="flex gap-[2px] py-2 text-xs items-center">
                <FaStar className="text-[#FFB80F]" />
                <FaStar className="text-[#FFB80F]" />
                <FaStar className="text-[#FFB80F]" />
                <FaStar className="text-[#FFB80F]" />
                <FaStar className="text-[#FFB80F]" />
              </div>
            </div>
          </div>
          <button className="w-full text-white bg-primary rounded-xl py-2.5 mx-2  ">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
