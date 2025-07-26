"use client";
import Image from "next/image";
import { ProductData } from "@/app/types/products";
import Instructor from "@/app/components/instructor";
import CourseOverview from "./courseOverview";
import BuyCourseMobile from "@/app//components/buyCourseMobile";
import Trailer from "@/app//components/trailer";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Play } from "lucide-react";
import CheckList from "./checkList";
interface BannerProps {
  bannerData: ProductData;
}

const Banner = ({ bannerData }: BannerProps) => {
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowBuyButton(scrollPosition > 1000);
    };

    const initializeScrollState = () => {
      setTimeout(() => {
        const scrollPosition = window.scrollY;
        setShowBuyButton(scrollPosition > 1000);
      }, 100);
    };

    initializeScrollState();

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("load", initializeScrollState);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", initializeScrollState);
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="skills-landing"
      className="min-h-[300px] md:min-h-[300px] font-poppins"
    >
      <div className="container mx-auto relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]">
        <div className="order-1 flex flex-col justify-center flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          <div className="block mt-4 md:mt-0 md:hidden">
            <div className="relative overflow-hidden bg-black youtube-video aspect-video">
              <div className="relative">
                <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    fill="none"
                    viewBox="0 0 56 56"
                  >
                    <circle
                      cx="28"
                      cy="28"
                      r="28"
                      fill="#fff"
                      fillOpacity="0.5"
                    ></circle>
                    <circle cx="27.999" cy="28" r="25.415" fill="#fff"></circle>
                    <path
                      fill="#1CAB55"
                      d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                    ></path>
                  </svg>
                </span>
                <div className="thumb-wrap">
                  <div>
                    <div
                      className="opacity-0 transition-opacity duration-300 ease-in-out"
                      style={{
                        fontSize: "0px",
                        objectFit: "cover",
                        opacity: 1,
                      }}
                    >
                      <Image
                        alt="image"
                        data-original-src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                        fetchPriority="high"
                        width="867"
                        height="480"
                        decoding="async"
                        data-nimg="1"
                        className="w-full"
                        src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="absolute left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer">
                  <ChevronLeft className="w-6 h-6 text-gray-500 bg-white rounded-full" />
                </div>
                <div className="absolute right-[10px] top-1/2 z-[4] -translate-y-1/2 h-[25px] w-[25px] cursor-pointer">
                  <ChevronRight className="w-6 h-6 text-gray-500 bg-white rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex gap-4 p-4 overflow-x-auto hideScrollbar">
              {bannerData.media
                .filter((item) => item.name === "preview_gallery")
                .map((item, index) => (
                  <div
                    key={index}
                    className="relative w-[55px] rounded cursor-pointer border-0"
                  >
                    {item.resource_type === "video" ? (
                      <>
                        <div
                          className="rounded transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: 0, opacity: 1 }}
                        >
                          <Image
                            alt={item.name}
                            loading="lazy"
                            width={86}
                            height={50}
                            decoding="async"
                            style={{ color: "transparent" }}
                            src={item.thumbnail_url}
                          />
                        </div>
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                          <div
                            className="transition-opacity duration-300 ease-in-out"
                            style={{ fontSize: 0, opacity: 1 }}
                          >
                            <Image
                              alt="Play The Video"
                              fetchPriority="high"
                              width={20}
                              height={20}
                              decoding="async"
                              style={{ color: "transparent" }}
                              src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                            />
                          </div>
                        </div>
                      </>
                    ) : item.resource_type === "image" ? (
                      <div
                        className="rounded transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: 0, opacity: 1 }}
                      >
                        <Image
                          alt={item.name}
                          loading="lazy"
                          width={86}
                          height={50}
                          decoding="async"
                          style={{ color: "transparent" }}
                          src={item.resource_value}
                        />
                      </div>
                    ) : null}
                  </div>
                ))}
            </div>

            <div className="block md:hidden">
              <h1 className="text-gray mb-3 mt-3 text-[21px] font-semibold md:text-4xl"></h1>
              <div className="mb-4 text-sm font-normal"></div>
            </div>
          </div>
          <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">
            {bannerData.title}
          </h1>
          <div className="mb-2">
            <button className="flex flex-row flex-wrap gap-2 text-white">
              <span className="inline-block">
                <Image
                  className="md:w-[130px] w-[100px]"
                  src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
                  alt="rating"
                  width={130}
                  height={30}
                />
              </span>
              <span className="inline-block text-sm md:text-base">
                (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
              </span>
            </button>
          </div>{" "}
          <div>
            <div
              className="text-gray-400"
              style={{ overflow: "hidden", height: "auto", maskImage: "none" }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: bannerData.description }}
              />
            </div>
          </div>
        </div>

        <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute">
          <div className="md:sticky md:top-[112px] ">
            <div className=" md:border">
              <div className="hidden p-1 md:block" id="">
                <div className="relative overflow-hidden bg-black youtube-video aspect-video">
                  <div className="relative">
                    <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="none"
                        viewBox="0 0 56 56"
                      >
                        <circle
                          cx="28"
                          cy="28"
                          r="28"
                          fill="#fff"
                          fillOpacity="0.5"
                        ></circle>
                        <circle
                          cx="27.999"
                          cy="28"
                          r="25.415"
                          fill="#fff"
                        ></circle>
                        <path
                          fill="#1CAB55"
                          d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                        ></path>
                      </svg>
                    </span>
                    <div className="thumb-wrap">
                      <div>
                        <div
                          className="opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{
                            fontSize: 0,
                            objectFit: "cover",
                            opacity: 1,
                          }}
                        >
                          <Image
                            alt="IELTS Course by Munzereen Shahid"
                            src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                            width={867}
                            height={480}
                            className="w-full"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="absolute left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer">
                      <ChevronLeft className="w-6 h-6 text-gray-500 bg-white rounded-full" />
                    </div>
                    <div className="absolute right-[10px] top-1/2 z-[4] -translate-y-1/2 h-[25px] w-[25px] cursor-pointer">
                      <ChevronRight className="w-6 h-6 text-gray-500 bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                <Trailer media={bannerData.media} />
                <div className="block md:hidden">
                  <h1 className="text-gray mb-3 mt-3 text-[21px] font-semibold md:text-4xl">
                    IELTS Course by Munzereen Shahid
                  </h1>
                  <div className="mb-4 text-sm font-normal"></div>
                </div>
              </div>

              <CourseOverview bannerData={bannerData} />
              {showBuyButton && (
                <div className="fixed top-28 z-50 w-full max-w-[330px] lg:max-w-[400px] bg-white border hidden md:block">
                  <CourseOverview bannerData={bannerData} />
                </div>
              )}
            </div>

            <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
              <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
              <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green">
                <Phone className="w-4 h-4" />
                <span className="ml-1">ফোন করুন (16910)</span>
              </span>
            </p>
          </div>
        </section>
      </div>

      <BuyCourseMobile />

      <CheckList checkListData={bannerData.checklist} />
    </div>
  );
};

export default Banner;
