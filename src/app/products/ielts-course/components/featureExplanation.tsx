import { Sections } from "@/app/types/products";
import { Check } from "lucide-react";
import Image from "next/image";

interface FeatureExplanationProps {
  featureExplanationsData: Sections[];
}

const FeatureExplanation = ({
  featureExplanationsData,
}: FeatureExplanationProps) => {
  const featureExplanations = featureExplanationsData.find(
    (feature) => feature.type === "feature_explanations"
  );

  const featureValues = featureExplanations?.values;

  if (!featureExplanations || !featureValues || featureValues.length === 0) {
    return <div className="p-4">No feature explanations data available</div>;
  }

  return (
    <div id="feature_explanations" className="flex flex-col gap-3 mb-10 font-poppins">
      <h2 className="text-xl font-semibold leading-[30px] text-black">
        {featureExplanations?.name}
      </h2>

      <div className="grid grid-cols-1 px-5 border divide-y rounded-md">
        {featureValues.map((feature, index) => (
          <div
            key={feature.id || index}
            className="flex flex-col items-start justify-between gap-3 py-5 md:flex-row"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-[14px] font-medium leading-[30px] text-[#111827] md:text-[16px]">
                {feature.title}
              </h3>

              {feature.checklist?.map((text, checkIndex) => (
                <div
                  key={checkIndex}
                  className="flex flex-row items-center gap-5"
                >
                  <Check className="text-[#6294F8] mt-[2px] flex-shrink-0" />
                  <p className="text-[14px] font-normal leading-[24px] text-[#4B5563] md:text-[16px]">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {feature.file_url && (
              <div className="mb-4 mx-auto max-w-[350px]">
                <Image
                  alt={feature.title}
                  src={feature.file_url}
                  loading="lazy"
                  width={250}
                  height={200}
                  decoding="async"
                  className="transition-opacity duration-300 ease-in-out"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureExplanation;
