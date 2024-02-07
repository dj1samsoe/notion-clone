import Image from "next/image";
import { Nunito_Sans } from "next/font/google";

import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const Logo = () => {
  return (
    <Link href={"/"} className="hidden md:flex items-center gap-x-1">
      <Image
        src="/logo.png"
        width={35}
        height={35}
        loading="lazy"
        alt="Dotion Logo"
        className="object-contain dark:hidden"
      />
      <Image
        src="/logo-dark.png"
        width={35}
        height={35}
        loading="lazy"
        alt="Dotion Logo"
        className="hidden dark:block object-contain"
      />
      <p className={cn("font-semibold", font.className)}>Dotion</p>
    </Link>
  );
};
