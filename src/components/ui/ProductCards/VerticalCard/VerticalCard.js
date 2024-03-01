import Image from "next/image";
import pic1 from "../../../../assets/pic.png";

const VerticalCard = () => {
  return (
    <div className="my-8">
      {/* Title */}
      <h1 className="text-[32px] text-darkText my-6">
        Related deals you might like for
      </h1>

      {/* card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4 lg:mx-2">
        <div className="bg-white rounded-xl px-4 ">
          {/* Img section */}
          <div className="flex items-center justify-center py-10">
            <Image src={pic1} alt=" card img" height={103} width={141} />
          </div>

          {/* card body */}

          <div>
            {/* discount section */}
            <div className="flex gap-1 py-2">
              <p className="text-[#074786]  bg-[#F2F4F7] rounded-lg px-1.5 py-1">
                20% Off
              </p>
              <p className="text-[#074786]  bg-[#F2F4F7] rounded-lg px-1.5 py-1">
                Limited time
              </p>
            </div>

            {/* title */}
            <h3 className="text-darkLightText font-bold text-center py-2">
              Webbuilder 1
            </h3>
            {/* Card details */}
            <div>
              <p className="text-darkLightText">
                Computer Modern clasic with wix support
              </p>
              <div className="text-darkLightText py-1 flex flex-wrap gap-2 ">
                <p className="text-xl">$36.96</p>
                <p className=" text-[#9FA9B3] text-sm">$49.96</p>
                <p className="text-[#EF4C5D] text-[13px]">(20% off)</p>
              </div>
              <button className="w-full text-white bg-primary my-3 rounded-xl py-2.5 mx-2  ">
                View Deal
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl px-4 ">
          {/* Img section */}
          <div className="flex items-center justify-center py-10">
            <Image src={pic1} alt=" card img" height={103} width={141} />
          </div>

          {/* card body */}

          <div>
            {/* discount section */}
            <div className="flex gap-1 py-2">
              <p className="text-[#074786]  bg-[#F2F4F7] rounded-lg px-1.5 py-1">
                20% Off
              </p>
              <p className="text-[#074786]  bg-[#F2F4F7] rounded-lg px-1.5 py-1">
                Limited time
              </p>
            </div>

            {/* title */}
            <h3 className="text-darkLightText font-bold text-center py-2">
              Webbuilder 1
            </h3>
            {/* Card details */}
            <div>
              <p className="text-darkLightText">
                Computer Modern clasic with wix support
              </p>
              <div className="text-darkLightText py-1 flex flex-wrap gap-2 ">
                <p className="text-xl">$36.96</p>
                <p className=" text-[#9FA9B3] text-sm">$49.96</p>
                <p className="text-[#EF4C5D] text-[13px]">(20% off)</p>
              </div>
              <button className="w-full text-white bg-primary my-3 rounded-xl py-2.5 mx-2  ">
                View Deal
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl px-4 ">
          {/* Img section */}
          <div className="flex items-center justify-center py-10">
            <Image src={pic1} alt=" card img" height={103} width={141} />
          </div>

          {/* card body */}

          <div>
            {/* discount section */}
            <div className="flex gap-1 py-2">
              <p className="text-[#074786]  bg-[#F2F4F7] rounded-lg px-1.5 py-1">
                20% Off
              </p>
              <p className="text-[#074786]  bg-[#F2F4F7] rounded-lg px-1.5 py-1">
                Limited time
              </p>
            </div>

            {/* title */}
            <h3 className="text-darkLightText font-bold text-center py-2">
              Webbuilder 1
            </h3>
            {/* Card details */}
            <div>
              <p className="text-darkLightText">
                Computer Modern clasic with wix support
              </p>
              <div className="text-darkLightText py-1 flex flex-wrap gap-2 ">
                <p className="text-xl">$36.96</p>
                <p className=" text-[#9FA9B3] text-sm">$49.96</p>
                <p className="text-[#EF4C5D] text-[13px]">(20% off)</p>
              </div>
              <button className="w-full text-white bg-primary my-3 rounded-xl py-2.5 mx-2  ">
                View Deal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
