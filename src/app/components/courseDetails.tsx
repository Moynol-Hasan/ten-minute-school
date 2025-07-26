import { Sections } from "@/app/types/products";
import { Check } from "lucide-react";
interface CourseDetailsProps {
  courseDetailsData: Sections[];
}
const ThingsYouNeed = ({ courseDetailsData }: CourseDetailsProps) => {
  const courseDetails = courseDetailsData.find(
    (detail) => detail.type === "requirements"
  );

  const courseDetailsValues = [
    { title: "ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)" },
    { title: "স্মার্টফোন অথবা পিসি" },
  ];

  return (
    <div id="requirements" className="font-poppins">
      <div className="mb-6 bg-[#E5E7EB] pb-2 md:mb-12 md:bg-white md:py-0">
        <div className="pb-6 bg-white md:pb-0">
          <div className="mb-0">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              {courseDetails?.name}
            </h2>
            <div className="py-2 rounded-md md:border md:p-6">
              <ul>
                {courseDetailsValues.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 mb-2">
                    <Check className="text-[#6294F8] mt-[2px]" />
                    <div className="flex-1">{item.title}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsYouNeed;
