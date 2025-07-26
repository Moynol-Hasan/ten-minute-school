import { getUserLocale } from "@/services/locale";
import NavContents from "./contents";

const Navbar = async () => {
  const locale = await getUserLocale();
  
  return (
    <>
      <NavContents locale={locale} />
    </>
  );
};

export default Navbar;