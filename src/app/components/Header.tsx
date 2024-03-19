import Bag from "@/app/assets/bag.svg";
import Cart from "@/app/assets/cart.svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface NavLinks {
  link: string;
  text?: string;
  icons?: StaticImageData;
}

interface BtnLinks {
  link: string;
  text?: string;
}

const navLinks: NavLinks[] = [
  { link: "/products", text: "Products" },
  { link: "/products", icons: Bag },
];

const btnLinks: BtnLinks[] = [
  { link: "/login", text: "Login" },
  { link: "/signup", text: "SignUp" },
];

export default function Header() {
  return (
    <header className="bg-black">
      <div className="container mx-auto">
        <div className="py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-white flex items-center gap-2 font-extrabold"
          >
            <Image width={40} height={40} src={Cart} alt="Cart.svg" />
            Ecommerce
          </Link>

          <div className="flex gap-16">
            <ul className="flex gap-6 items-center">
              {navLinks.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link className="text-white text-base" href={link.link}>
                    {link.text}
                    {link.icons && (
                      <Image
                        src={link.icons}
                        alt={link.link}
                        width={24}
                        height={24}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex gap-6 items-center">
              {btnLinks.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    className="text-white bg-green-600 px-4 py-2 rounded text-base hover:bg-green-800"
                    href={link.link}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
