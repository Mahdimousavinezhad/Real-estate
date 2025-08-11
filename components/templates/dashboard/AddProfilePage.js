"use client";

import { useState } from "react";

import RadioList from "@/components/elements/RadioList";
import TextInput from "@/components/elements/TextInput";
import { radioInputInfo, textInputInfo } from "@/constants/profileFormInputs";
import TextList from "@/components/modules/TextList";
import CustomeDatePicker from "@/components/modules/CustomeDatePicker";
import { useAddProfile } from "@/hooks/mutations";
import toast from "react-hot-toast";
import Loader from "@/components/modules/Loader";

function AddProfilePage() {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    price: null,
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });

  const { mutate, isPending } = useAddProfile();

  const submitHandler = () => {
    const newData = { ...profileData, price: +profileData.price };
    const { amenities, rules, ...rest } = newData;

    for (const key in rest) {
      const value = rest[key];
      console.log(value);

      if (value === undefined && value === null && value === "") {
        return toast.error("مقادیر معتبر وارد کنید!");
      }
    }

    mutate(newData);
  };

  return (
    <div className="mb-96 border-2 p-5 rounded-xl">
      <h3 className="text-[#304ffe] bg-[#304ffe]/25 p-3 font-normal text-2xl rounded-lg">
        ثبت آگهی
      </h3>
      {textInputInfo.map((info) => (
        <TextInput
          key={info.id}
          {...info}
          profileData={profileData}
          setProfileData={setProfileData}
        />
      ))}

      <div className="mt-8">
        <p className="text-lg font-normal mb-2">دسته بندی</p>
        <div className="flex items-center gap-4">
          {radioInputInfo.map((info) => (
            <RadioList
              key={info.id}
              {...info}
              profileData={profileData}
              setProfileData={setProfileData}
            />
          ))}
        </div>
      </div>

      <TextList
        type="amenities"
        title="امکانات رفاهی"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextList
        type="rules"
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
      />

      <CustomeDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />

      {isPending ? (
        <div className="flex justify-center">
          <Loader isPending={isPending} />
        </div>
      ) : (
        <button
          onClick={submitHandler}
          className="bg-[#304ffe] rounded-md w-full text-white py-2 mt-10 hover:bg-blue-700 transition-all duration-200 font-normal"
        >
          ثبت آگهی
        </button>
      )}
    </div>
  );
}

export default AddProfilePage;
