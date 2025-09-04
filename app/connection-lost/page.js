import Image from "next/image";

function ConnectionLostPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        className="w-[1000px] h-[700px] max-[600px]:h-[500px] max-[420px]:h-[400px]"
        src="/images/offline.jpg"
        width={2000}
        height={2000}
        alt="صفحه پیدا نشد"
      />
      <p className="mt-5 text-4xl font-semibold text-cs-blue tracking-widest max-[600px]:text-xl">
        ارتباط شما با سرور قطع شد!
      </p>
      <p className="mt-5 mb-20 text-xl font-semibold text-cs-blue tracking-widest max-[600px]:text-xl">
        لطفا دوباره امتحان کنید
      </p>
    </div>
  );
}
export default ConnectionLostPage;
