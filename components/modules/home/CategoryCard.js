import Image from "next/image";
import Link from "next/link";

import { categories } from "@/constants/homePageInfo";

function CategoryCard() {
  return (
    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {categories.map((category, index) => (
        <div
          key={index}
          className="shadow-[#304ffe4a_0px_4px_15px] py-5 px-2 rounded-[15px] transition-all duration-100 hover:rotate-[-5deg]"
        >
          <Link href={"#"}>
            <Image
              src={category.src}
              alt={category.title}
              width={260}
              height={144}
              priority={true}
              className="rounded-[10px] mx-auto"
            />
            <p className="text-center mt-[12px] font-normal text-[#304ffe] text-[1.1rem]">
              {category.title}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CategoryCard;
