import Link from "next/link";
import { FiLogIn } from "react-icons/fi";

function Header() {
  return (
    <header className="flex items-center justify-between bg-[#304ffe] text-white p-3 rounded-lg mt-4">
      <div>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/">صفحه ی اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link
          href="/signin"
          className="flex items-center gap-1 bg-white rounded-md text-black p-1 hover:bg-transparent hover:text-white transition-all duration-300 hover:scale-105"
        >
          <FiLogIn />
          <span>ورود</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
