function Footer() {
  return (
    <footer className="flex justify-between items-center bg-[#304ffe] p-4 text-white rounded-lg mb-4 max-md:flex-col max-md:gap-4 max-md:items-start max-md:px-5">
      <div className="self-start">
        <h3 className="mb-4 text-[1.4rem] font-semibold">
          سامانه خرید و اجاره ملک
        </h3>
        <p className="w-[82%] max-md:w-fit">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.
        </p>
      </div>
      <div>
        <ul className="list-disc">
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
