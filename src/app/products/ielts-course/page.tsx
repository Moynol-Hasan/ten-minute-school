import Banner from "./components/banner";
import { Product } from "@/app/types/products";
// Server Component - runs on the server
const Page = async () => {
  // Direct API call in Server Component (App Router)
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course",
        {
          // Optional: Add cache control
          cache: "no-store", // or 'force-cache' for caching
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

  console.log("Fetched data:", data);

  if (!data || !data.data) {
    return <div className="p-4">No data available</div>;
  }

  return (
    <>
      <Banner bannerData={data?.data} />
    </>
  );
};

export default Page;
