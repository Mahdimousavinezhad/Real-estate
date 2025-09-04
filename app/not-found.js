import Image from "next/image";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        className="w-[1000px] h-[700px] max-[600px]:h-[500px] max-[420px]:h-[400px]"
        src="/images/not-found.jpg"
        width={2000}
        height={1647}
        alt="صفحه پیدا نشد"
      />
      <p className="mt-5 mb-20 text-4xl font-semibold text-cs-blue tracking-widest max-[600px]:text-xl">
        صفحه ی مورد نظر یافت نشد!
      </p>
    </div>
  );
}

export default NotFound;
