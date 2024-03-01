import Image from "next/image";
import pic1 from "../../../../assets/pic.png";
import { getAllWebsites } from "@/utils/getAllWebsites";

const VerticalCard = async () => {
  const data = await getAllWebsites();
  return (
    <div>
      <div className="my-8">
        {/* Title */}
        <h1 className="text-[32px] text-darkText my-6">
          Related deals you might like for
        </h1>

        {/* card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4 lg:mx-2">
          {data.map((item, index) => (
            <div className="bg-white rounded-xl px-4 " key={item._id}>
              {/* Img section */}
              <div className="flex items-center justify-center py-10">
                <Image
                  src={item.pic}
                  alt=" card img"
                  height={103}
                  width={141}
                />
              </div>

              {/* card body */}

              <div>
                {/* discount section */}
                <div className="flex gap-1 py-2">
                  <p className="text-[#074786]  bg-[#F2F4F7] rounded-lg px-1.5 py-1">
                    {item.discountPercent}% Off
                  </p>
                  <p className="text-[#074786]  bg-[#F2F4F7] rounded-lg px-1.5 py-1">
                    Limited time
                  </p>
                </div>

                {/* title */}
                <h3 className="text-darkLightText font-bold text-center py-2">
                  {item.name}
                </h3>
                {/* Card details */}
                <div>
                  <p className="text-darkLightText">
                    {item.details.length > 50
                      ? item.details.slice(0, 50) + "..."
                      : item.details}
                  </p>
                  <div className="text-darkLightText py-1.5 flex items-center flex-wrap gap-2 ">
                    <p className="text-xl">${item.discountPrice}</p>
                    <p className=" text-[#9FA9B3] text-sm">${item.price}</p>
                    <p className="text-[#EF4C5D] text-[13px]">
                      ({item.discountPercent}% off)
                    </p>
                  </div>
                  <button className="w-full text-white bg-primary my-3 rounded-xl py-2.5 mx-2  ">
                    View Deal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
