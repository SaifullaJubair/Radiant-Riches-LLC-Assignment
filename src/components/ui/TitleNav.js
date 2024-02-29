import { FaRegCircleCheck } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import BreadCrumb from "./BreadCrumb";
const TitleNav = () => {
  return (
    <div>
      {/* Title section  */}
      <h1 className="text-darkText text-3xl md:text-5xl pt-10 lg:pt-16 tracking-wide pb-6">
        Best Website builders in the US
      </h1>
      {/* Border section */}
      <div className="border-y-2  border-b-[#E1E4E6] w-full py-3">
        <div className="flex flex-wrap gap-8 text-darkLightText items-center mx-2 lg:mx-0">
          <div className="flex gap-4">
            <FaRegCircleCheck className="text-[#626E79] text-xl " />
            <p className="text-sm">Last Update- February 22,20</p>
          </div>
          <div className="flex gap-4">
            <IoInformationCircleOutline className="text-[#626E79]  text-2xl " />
            <p className="text-sm">Advertising Disclosure</p>
          </div>
        </div>
      </div>
      {/* End of border */}
      {/* Some Categories List Section */}
      <div className="my-6">
        <ul className="flex flex-wrap gap-6 text-darkLightText text-sm">
          <li className="rounded-xl bg-white py-2 px-6 ">Tools</li>
          <li className="rounded-xl bg-white py-2 px-6 ">AWS Builder</li>
          <li className="rounded-xl bg-white py-2 px-6 ">Start Build</li>
          <li className="rounded-xl bg-white py-2 px-6 "> Build Supplies</li>
          <li className="rounded-xl bg-white py-2 px-6 "> Tooling</li>
          <li className="rounded-xl bg-white py-2 px-6 "> BlueHosting</li>
        </ul>
      </div>
      {/* Breadcrumb */}
      <BreadCrumb />
    </div>
  );
};

export default TitleNav;
