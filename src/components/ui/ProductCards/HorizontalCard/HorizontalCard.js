import { FaArrowDown, FaChevronDown, FaStar } from "react-icons/fa6";
import pic1 from "../../../../assets/pic.png";
import Image from "next/image";
import { CiTrophy } from "react-icons/ci";
import { getAllWebsites } from "@/utils/getAllWebsites";
import { IoDiamondOutline } from "react-icons/io5";
const HorizontalCard = async () => {
  const data = await getAllWebsites();
  return (
    <div>
      {data.map((item, index) => (
        <div className="bg-white rounded-xl my-8 py-4 " key={item._id}>
          {/* card side section index no */}
          <div className="relative">
            {/* Add this line for debugging */}

            <div className="relative">
              {item && item.status === "bestvalue" && (
                <div className="relative">
                  <div className="absolute -top-8 -left-2 bg-org py-2 px-4 rounded-r-lg">
                    <p className="text-white text-xs flex gap-2 items-center">
                      <CiTrophy className="text-white text-lg" />
                      Best Value
                    </p>
                  </div>
                </div>
              )}

              {item && item.status === "bestchoice" && (
                <div className="relative">
                  <div className="absolute -top-8 -left-2 bg-org py-2 px-4 rounded-r-lg">
                    <p className="text-white text-xs flex gap-2 items-center">
                      <IoDiamondOutline className="text-white text-lg" />
                      Best Choice
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="absolute  -left-5 mt-4 bg-white  px-4 py-2 rounded-full border-[#E1E4E6] border-[1px]">
              {index + 1}
            </div>
          </div>
          <div className="grid grid-cols-12  gap-2">
            {/* Img section */}
            {/* 1st col */}
            <div className=" col-span-12 lg:col-span-3  mx-auto flex items-center justify-center">
              <Image
                height={300}
                width={300}
                src={item.pic}
                alt=""
                className="lg:py-4 py-10"
              />
            </div>
            {/* 2nd col */}
            {/* details section */}
            <div className="col-span-12 sm:col-span-8 lg:col-span-6 mx-2 lg:my-0 my-8">
              <div className=" ">
                <p className="text-darkLightText ">
                  <span className="text-darkText font-bold">
                    {" "}
                    {item?.title}-
                  </span>
                  {item?.details}
                </p>
                <h3 className="text-darkText font-bold py-2">
                  Main highlights
                </h3>
                <p className="pl-3 text-darkLightText py-1.5">
                  {item?.highlights}
                </p>
                <button className="flex gap-2 items-center pl-1 pt-2 text-primary hover:text-blue-400 hover:underline">
                  Show more <FaChevronDown />
                </button>
              </div>
            </div>
            {/* 3rd col */}
            {/* review and vew section */}
            <div className="col-span-12 sm:col-span-4 lg:col-span-3 mx-2 flex item-center flex-col justify-between">
              {/* rating section */}
              <div className="pb-4 ">
                <div className="rounded-b-xl bg-[#F3F9FF] px-4 -mt-4 pb-2 flex flex-col items-center justify-center w-[135px] mx-auto">
                  <p className="text-[#074786]  pt-4 pb-2 text-[32px]">
                    {item.rating}
                  </p>
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
      ))}
    </div>
  );
};

export default HorizontalCard;
