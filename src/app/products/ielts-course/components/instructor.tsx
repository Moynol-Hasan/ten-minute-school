import Image from "next/image";
import { Sections } from "@/app/types/products";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface InstructorProps {
  instructorsData: Sections[];
}

const Instructor = ({ instructorsData }: InstructorProps) => {
  const instructor = instructorsData.find(
    (section) => section.type === "instructors"
  );
  const instructorValues = instructor?.values;

  if (!instructor || !instructorValues || instructorValues.length === 0) {
    return <div className="p-4">No instructor data available</div>;
  }

  return (
    <div id="instructors" className="poppins mb-7 xs:bg-[#EEF2F4] xs:pt-2 font-poppins">
      <div className="pt-4 pb-2 bg-white">
        <h2 className="mb-4 text-xl font-semibold md:text-2xl font-poppins">
          {instructor?.name}
        </h2>
        <div className="flex items-center md:rounded-md md:border md:p-5">
          <div className="rounded-full overflow-hidden">
            <Image
              alt={`Instructor ${instructorValues[0]?.name}`}
              loading="lazy"
              width={73}
              height={73}
              decoding="async"
              className="transition-opacity duration-300 ease-in-out"
              src={instructorValues[0]?.image}
            />
          </div>
          <div className="flex-1 ml-4">
            <h3 className="text-lg">
              <Link
                className="flex items-center hover:text-green"
                href="https://10minuteschool.com/en/skills/instructors/munzereen-shahid/"
              >
                {instructorValues[0]?.name}
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </h3>
            <div
              className="text-sm"
              dangerouslySetInnerHTML={{
                __html: instructorValues[0].description,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
