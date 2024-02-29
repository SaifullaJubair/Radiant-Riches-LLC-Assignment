import { FaStar } from "react-icons/fa6";
import pic1 from "../../../../assets/pic.png";
const VerticalCard = () => {
  return (
    <div className="bg-white rounded">
      <div className="grid grid-cols-12 gap-2">
        {/* Img section */}
        <div className="col-span-3 mx-2 ">
          <img src={pic1} alt="" />
        </div>
        {/* details section */}
        <div className="col-span-6 mx-2">
          <div className=" ">
            <p className="text-darkLightText ">
              <span className="text-darkText font-bold">
                {" "}
                WixPro 72-Inch Responsive Website Builder-
              </span>
              Comprehensive Digital Platform Creation Tool, Streamlined Design
              Interface for Professional Websites and Online Stores (Black/Blue)
            </p>
          </div>
        </div>
        {/* review and vew section */}
        <div className="col-span-3 mx-2">
          {/* rating section */}
          <div className="rounded-b-lg bg-[#F3F9FF] px-4 py-2">
            <div className="flex flex-col items-center justify-center">
              <p className="text-[#074786]  py-4 text-[32px]">9.8</p>
              <p className="text-[#074786] text-sm"> Exceptional</p>
              <div className="flex gap-1 text-md items-center">
                <FaStar className="text-[#FFB80F]" />
                <FaStar className="text-[#FFB80F]" />
                <FaStar className="text-[#FFB80F]" />
                <FaStar className="text-[#FFB80F]" />
                <FaStar className="text-[#FFB80F]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
