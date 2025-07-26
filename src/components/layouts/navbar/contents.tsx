import Image from "next/image";
import Link from "next/link";
import LanguageSwitch from "./LanguageSwitch";
import { ChevronDown, Phone } from "lucide-react";

interface NavbarProps {
  locale: string;
}

const NavMenus = [
  { name: "ক্লাস ৬-১২" },
  { name: "স্কিলস" },
  { name: "ভর্তি পরীক্ষা" },
  { name: "অনলাইন ব্যাচ" },
  { name: "ইংলিশ সেন্টার" },
  { name: "আরো" },
];

const NavContents = ({ locale }: NavbarProps) => {
  return (
    <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 md:px-7 font-poppins">
      <div className="flex gap-2">
        <button className="xl:hidden" type="button" name="menu-toggle">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 17.9995V19.9995H3V17.9995H21ZM17.4038 3.90332L22 8.49951L17.4038 13.0957L15.9896 11.6815L19.1716 8.49951L15.9896 5.31753L17.4038 3.90332ZM12 10.9995V12.9995H3V10.9995H12ZM12 3.99951V5.99951H3V3.99951H12Z"></path>
          </svg>
          <span className="sr-only">menu</span>
        </button>

        <Link className="h-[27px] w-[100px] md:hidden" href="/">
          <Image
            alt="10ms"
            width="100"
            height="27"
            src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
            className="transition-opacity duration-300"
          />
        </Link>
      </div>

      <Link className="h-[27px] w-[100px] hidden md:block" href="/">
        <Image
          alt="10ms"
          width="100"
          height="27"
          src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
          className="transition-opacity duration-300"
        />
      </Link>

      <div className="flex-1 hidden w-full pr-4 md:block">
        <div className="relative flex w-full items-center bg-white border rounded-[23px] px-3 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="24"
            fill="none"
            viewBox="0 0 27 24"
            className="mr-2"
          >
            <path fill="#fff" d="M0 0H26.514V23.99H0z"></path>
            <path
              fill="#111827"
              d="M21.247 20.065l-2.83-2.82a6.59 6.59 0 001.407-4.078 6.657 6.657 0 10-6.657 6.657 6.59 6.59 0 004.077-1.407l2.82 2.83a.834.834 0 001.365-.271.833.833 0 00-.182-.911zM8.174 13.167a4.993 4.993 0 119.985 0 4.993 4.993 0 01-9.985 0z"
            ></path>
            <path
              fill="#F1844C"
              d="M3.875.975l1.238 1.807c.33.481.853.794 1.433.857l2.178.236-1.807 1.239c-.481.33-.794.852-.857 1.432l-.237 2.178-1.238-1.807a1.998 1.998 0 00-1.432-.857L.974 5.824l1.808-1.239c.48-.33.794-.853.857-1.432L3.875.975zM8.59 19.77l-.337.54a1.998 1.998 0 00-.21 1.656l.19.607-.54-.337a1.998 1.998 0 00-1.655-.21l-.607.19.337-.54c.308-.494.385-1.099.21-1.655l-.19-.607.54.337c.494.308 1.099.385 1.655.21l.607-.19zM23.575 6.068l.223 1.396c.092.576.43 1.083.927 1.388l1.205.74-1.396.222a1.998 1.998 0 00-1.388.928l-.74 1.204-.222-1.396a1.997 1.997 0 00-.927-1.387l-1.205-.74 1.396-.223a1.997 1.997 0 001.388-.927l.74-1.205z"
            ></path>
          </svg>
          <input
            type="search"
            autoComplete="off"
            autoCorrect="off"
            placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
            className="w-full flex-1 placeholder:text-sm placeholder:text-gray-500 focus:outline-none"
            name="Search"
          />
        </div>
      </div>

      <nav className="hidden mr-4 xl:block">
        <ul className="flex items-center gap-2 lg:gap-4">
          {NavMenus.map((menu, index) => (
            <li key={index}>
              <div className="flex items-center gap-0.5 text-sm font-medium text-gray-600 cursor-pointer hover:text-green">
                <span>{menu.name}</span>
                <ChevronDown size={20} />
              </div>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right side actions */}
      <div className="flex items-center gap-3 md:gap-6">
        <LanguageSwitch defaultLocal={locale} />

        <Link
          className="items-center hidden gap-1 text-green md:flex"
          href="tel:16910"
        >
          <Phone className="text-green" size={20} />
          <span>16910</span>
        </Link>

        <Link
          className="flex items-center px-3 py-1 text-white rounded-md bg-green md:px-6"
          href="/auth/login/?returnUrl=%2Fproduct%2Fielts-course%2F"
        >
          <span className="whitespace-nowrap text-xs font-semibold md:text-base md:font-medium">
            লগ-ইন
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavContents;
