import Navbar from "@/components/layouts/navbar/navbar";
import { getUserLocale } from "@/services/locale";
import Banner from "@/app/components/banner";
import { Product } from "@/app/types/products";
import Instructor from "@/app/components/instructor";
import CourseStructure from "@/app/components/courseStructure";
import JoinEngagement from "@/app/components/joinEngagement";
import ThingsYourLearn from "@/app/components/thingsYouLearn";
import FeatureExplanation from "@/app/components/featureExplanation";
import CourseDetails from "@/app//components/courseDetails";
const Page = async () => {
  const locale = await getUserLocale();
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${locale}`,
        {
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const res: Product = await response.json();

      if (!res.data) {
        throw new Error("No data in response");
      }

      return res;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  const data = await fetchData();

  if (!data || !data.data) {
    return <div className="p-4">No data available</div>;
  }

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="sticky top-0 z-50 border-b bg-white md:h-[65px]">
          <Navbar />
        </div>

        <Banner bannerData={data?.data} />

        <main className="container flex flex-col gap-4 md:flex-row md:gap-12 font-poppins">
          <section className="order-2 flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
            <Instructor instructorsData={data.data.sections} />
            <CourseStructure featuresData={data.data.sections} />
            <JoinEngagement joinEngagementData={data.data.sections} />
            <ThingsYourLearn pointersData={data.data.sections} />
            <FeatureExplanation featureExplanationsData={data.data.sections} />
            <CourseDetails courseDetailsData={data.data.sections} />
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;
