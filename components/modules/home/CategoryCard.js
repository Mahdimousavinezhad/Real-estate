import Image from "next/image";
import Link from "next/link";

import { categories } from "@/constants/strings";

function CategoryCard() {
  return (
    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {Object.keys(categories).map((category, index) => (
        <div
          key={index}
          className="shadow-[#304ffe4a_0px_4px_15px] py-5 px-2 rounded-[15px] transition-all duration-100 hover:rotate-[-5deg]"
        >
          <Link
            href={{
              pathname: "/buy-residential",
              query: { category: category },
            }}
          >
            <Image
              src={`/images/${category}.png`}
              alt={categories[category]}
              width={260}
              height={144}
              priority={true}
              className="rounded-[10px] mx-auto"
            />
            <p className="text-center mt-[12px] font-normal text-cs-blue text-[1.1rem]">
              {categories[category]}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CategoryCard;
