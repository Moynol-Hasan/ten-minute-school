import { Sections } from "@/app/types/products";
import { Check } from "lucide-react";

interface PointersData {
  pointersData: Sections[];
}

const ThingsYouLearn = ({ pointersData }: PointersData) => {
  const pointers = pointersData.find((pointer) => pointer.type === "pointers");
  const pointerValues = pointers?.values;

  if (!pointers || !pointerValues || pointerValues.length === 0) {
    return <div className="p-4">No pointers data available</div>;
  }

  return (
    <div
      id="pointers"
      className="mb-6 md:mb-10 relative bg-[#E5E7EB] py-2 md:bg-white md:py-0 font-poppins"
    >
      <div className="pt-6 pb-6 bg-white md:pb-0 md:pt-0">
        <h2 className="mb-4 text-xl font-semibold md:text-2xl">
          {pointers.name}
        </h2>
        <div className="rounded-md md:border pt-2 md:p-6">
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
            {pointerValues.map((text, index) => (
              <li key={index} className="flex items-start gap-2 mb-2">
                <Check className="text-[#6294F8] mt-[2px]" />
                <div className="flex-1">{text.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThingsYouLearn;
