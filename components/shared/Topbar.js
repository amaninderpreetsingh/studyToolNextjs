import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "../../constants";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/studyLogo.png" alt="logo" width={40} height={40} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">
          Study Tools
        </p>
      </Link>

      <div className="flex items-center w-full flex-1 flex-row gap-6 px-6">
        <div className="flex items-center gap-10 mx-auto">
          {/* Centered container for sidebarLinks */}
          {sidebarLinks.map((link) => (
            <Link
              href={link.route}
              key={link.label}
              className="topbar_link flex flex-col items-center"
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={20}
                height={20}
              />
              <p
                className="text-light-1 max-lg:hidden"
                style={{ fontSize: "14px" }}
              >
                {link.label}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <SignedIn>
        <SignOutButton>
          <div className="flex cursor-pointer gap-4 p-4">
            <Image
              src="/assets/logout.svg"
              alt="logout"
              width={24}
              height={24}
            />
            <p className="text-light-2 max-lg:hidden">Logout</p>
          </div>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <div className="flex cursor-pointer gap-4 p-4">
            <Image
              src="/assets/login.png"
              alt="logout"
              width={24}
              height={24}
            />
            <p className="text-light-2 max-lg:hidden">Login</p>
          </div>
        </SignInButton>
      </SignedOut>
    </nav>
  );
}

export default Topbar;
