import Image from "next/image";
import { Media } from "@/app/types/products";

interface MediaProps {
  media: Media[];
}

const Trailer = ({ media }: MediaProps) => {
  const previewGalleryItems = media.filter(
    (item) => item.name === "preview_gallery"
  );

  const renderMediaItem = (item: Media, index: number) => {
    const isVideo = item.resource_type === "video";
    const imageSrc = isVideo ? item.thumbnail_url : item.resource_value;

    if (!imageSrc) return null;

    return (
      <div
        key={index}
        className="relative w-[55px] h-[29px] rounded cursor-pointer border-0 flex-shrink-0 overflow-hidden font-poppins"
      >
        <Image
          alt={isVideo ? `Video preview: ${item.name}` : item.name}
          loading="lazy"
          width={55}
          height={29}
          decoding="async"
          className="w-full h-full object-cover rounded transition-opacity duration-300 ease-in-out"
          src={imageSrc}
        />
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              alt="Play video"
              width={20}
              height={20}
              decoding="async"
              className="transition-opacity duration-300 ease-in-out"
              src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex gap-4 p-4 overflow-x-auto hideScrollbar">
      {previewGalleryItems.map(renderMediaItem)}
    </div>
  );
};

export default Trailer;
           
