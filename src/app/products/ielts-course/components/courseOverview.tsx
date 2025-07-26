import Image from "next/image";
import { Product, ProductData } from "@/app/types/products";
interface BannerProps {
  bannerData: ProductData;
}
const CourseOverview = ({ bannerData }: BannerProps) => {
  return (
    <>
      <div className="hidden md:block">
        <div className="w-full p-4 md:h-auto" id="variant">
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between md:flex-col md:items-start">
              <div className="md:mb-3">
                <div className="inline-block text-2xl font-semibold">
                  ৳3850
                </div>
                <span className="infline-flex">
                  <del className="ml-2 text-base font-normal md:text-xl">
                    ৳5000
                  </del>
                  <div className="c-Tukmu inline-block">
                    <p className="card-price">1150 ৳ ছাড়</p>
                  </div>
                </span>
              </div>
            </div>
            <button className=" bg-green whitespace-nowrap button primary text-center md:w-full centered-buttons">
              {bannerData.cta_text.name}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="grid py-2 md:p-4">
          <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>

          {bannerData.checklist.map((item, index) => (
            <div key={index} className="flex items-center mb-3 leading-5">
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
          ))}
        </div>
      </div>
    </>
  );
};
export default CourseOverview;
                   