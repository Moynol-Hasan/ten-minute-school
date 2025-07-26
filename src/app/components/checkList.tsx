import Image from "next/image";
import EnrollCourse from "./enrollCourse";
import { ProductData } from "../types/products";
interface CheckListProps {
  bannerData: ProductData;
  checkListData: {
    icon: string;
    text: string;
  }[];
}

const CheckList = ({ bannerData, checkListData }: CheckListProps) => {
  return (
    <>
      {/* <div className="block md:hidden font-poppins">
        <EnrollCourse bannerData={bannerData} />
      </div> */}

      {/* <div className="block px-4 bg-white md:hidden font-poppins"> */}
        <div className="grid py-2 px-4 md:p-4">
          <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>

          {checkListData.map((item, index) => (
            <div key={index}>
              <div className="flex items-center mb-3 leading-5">
                <div
                  className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: 0, opacity: 1 }}
                >
                  <Image
                    alt="icon"
                    src={item.icon}
                    width={20}
                    height={20}
                    style={{ color: "transparent" }}
                  />
                </div>
                <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                  {item.text}
                </h4>
              </div>
            </div>
          ))}
        </div>
      {/* </div> */}
    </>
  );
};

export default CheckList;
