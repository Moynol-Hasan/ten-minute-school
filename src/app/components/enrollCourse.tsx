import { ProductData } from "@/app/types/products";
interface EnrollCourseProps {
  bannerData: ProductData;
}
const EnrollCourse = ({ bannerData }: EnrollCourseProps) => {
  return (
    <>
      <div className="w-full p-4 md:h-auto" id="variant">
        <div className="flex flex-col w-full gap-3">
          <div className="flex items-center justify-between md:flex-col md:items-start">
            <div className="md:mb-3">
              <div className="inline-block text-2xl font-semibold">৳3850</div>
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
    </>
  );
};

export default EnrollCourse;
