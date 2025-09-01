import Link from "next/link";
import DashboardButton from "../modules/DashboardButton";

function Header() {
  return (
    <header className="flex items-center justify-between bg-cs-blue text-white p-3 rounded-lg mt-4">
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
      <DashboardButton />
    </header>
  );
}

export default Header;
