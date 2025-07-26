import Image from 'next/image';
import { Sections } from "@/app/types/products";

interface FeaturesProps {
    featuresData: Sections[];
}

const CourseStructure = ({ featuresData }: FeaturesProps) => {
    const features = featuresData.find(
        (feature) => feature.type === "features"
    );
    const featureValues = features?.values;

    if (!features || !featureValues || featureValues.length === 0) {
        return <div className="p-4">No feature data available</div>;
    }

    return (
        <div id="features" className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold leading-[30px] text-black">
                {features?.name}
            </h2>
            <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
                {featureValues.map((item, index) => (
                    <div key={index} className="flex flex-row items-start gap-3 m-1">
                        <Image
                            alt={item.title}
                            loading="lazy"
                            width={36}
                            height={36}
                            decoding="async"
                            className="mb-4 transition-opacity duration-300 ease-in-out"
                            src={item.icon}
                        />
                        <div className="flex flex-col flex-1 gap-2">
                            <h3 className="text-[18px] font-medium leading-[26px] text-white">
                                {item.title}
                            </h3>
                            <p className="text-[14px] font-normal leading-[22px] text-[#9CA3AF]">
                                {item.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseStructure;