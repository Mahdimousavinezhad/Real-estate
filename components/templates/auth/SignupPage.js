"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRegister } from "@/hooks/mutations";
import toast from "react-hot-toast";
import Loader from "@/components/modules/Loader";

function SignupPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const router = useRouter();

  const { mutate, isPending } = useRegister(router);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const regitserHandler = (event) => {
    event.preventDefault();

    if (!form.email || !form.password || !form.repeatPassword) {
      return toast.error("لطفا اطلاعات خود را کامل وارد کنید!");
    }

    if (form.password !== form.repeatPassword) {
      return toast.error("تکرار رمز عبور خود را به درستی وارد کنید!");
    }

    mutate({ email: form.email, password: form.password });
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-[100vh]">
      <h4 className="font-semibold text-2xl text-cs-blue mb-4">فرم ثبت نام</h4>
      <form className="flex flex-col shadow-[#304ffe4a_0px_4px_15px] max-w-[700px] border-[2px] border-solid border-cs-blue p-10 rounded-xl mb-8">
        <label htmlFor="email" className="text-cs-blue mb-[10px] font-normal">
          ایمیل:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={form.email}
          onChange={changeHandler}
          className="mb-10 w-64 border border-dashed border-cs-blue text-gray rounded-md p-[10px] text-end text-[1rem] h-[40px] focus:border-solid focus:outline-none"
        />
        <label
          htmlFor="password"
          className="text-cs-blue mb-[10px] font-normal"
        >
          رمز عبور:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={changeHandler}
          className="mb-10 w-64 border border-dashed border-cs-blue text-gray rounded-md p-[10px] text-end text-[1rem] h-[40px] focus:border-solid focus:outline-none"
        />
        <label
          htmlFor="repeatPassword"
          className="text-cs-blue mb-[10px] font-normal"
        >
          تکرار رمز عبور:
        </label>
        <input
          type="password"
          id="repeatPassword"
          name="repeatPassword"
          value={form.repeatPassword}
          onChange={changeHandler}
          className="mb-10 w-64 border border-dashed border-cs-blue text-gray rounded-md p-[10px] text-end text-[1rem] h-[40px] focus:border-solid focus:outline-none"
        />
        {!isPending ? (
          <button
            type="submit"
            onClick={regitserHandler}
            disabled={isPending}
            className="border-none bg-cs-blue text-white text-[1.2rem] font-normal rounded-[5px] transition-all ease-in duration-200 cursor-pointer py-2 hover:scale-105"
          >
            ثبت نام
          </button>
        ) : (
          <Loader isPending={isPending} />
        )}
      </form>
      <p className="text-gray text-[1.1rem]">
        حساب کاربری دارید؟
        <Link
          href="/signin"
          className="text-cs-blue m-[10px] border-b-[3px] border-solid border-b-grey"
        >
          ورود
        </Link>
      </p>
    </div>
  );
}

export default SignupPage;
