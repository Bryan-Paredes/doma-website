import { useState } from "react";
import { NavBar } from "../NavBar/NavBar.tsx";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className="container mx-auto my-5" id="home">
      <div className="flex items-center justify-between w-full px-5 md:px-10">
        <a className="font-bold text-2xl" href="/">
          <img
            src="/LOGO.webp"
            alt="LOGO DOMA"
            className="w-20 h-20"
            loading="eager"
          />
        </a>
        {openMobileMenu ? (
          <img
            src="/icons/xMark.svg"
            alt="menuMobile"
            className="block w-8 h-8 cursor-pointer md:hidden"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          />
        ) : (
          <img
            src="/icons/menuMobile.svg"
            alt="menuMobile"
            className="block w-8 h-8 cursor-pointer md:hidden"
            onClick={() => setOpenMobileMenu(!openMobileMenu)}
          />
        )}

        <NavBar openMobileMenu={openMobileMenu} />
      </div>
    </div>
  );
}
