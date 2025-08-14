"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import RadioList from "@/components/elements/RadioList";
import TextInput from "@/components/elements/TextInput";
import TextList from "@/components/modules/dashboard/TextList";
import CustomeDatePicker from "@/components/modules/dashboard/CustomeDatePicker";
import Loader from "@/components/modules/Loader";
import { radioInputInfo, textInputInfo } from "@/constants/profileFormInputs";
import { useAddProfile, useEditProfile } from "@/hooks/mutations";

function AddProfilePage({ profileId, profile }) {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    price: null,
    phone: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });

  useEffect(() => {
    if (profile) setProfileData(profile);
  }, []);

  const router = useRouter();
  const { mutate: editProfileMutate, isPending: editProfilePending } =
    useEditProfile(profileId, router);

  const { mutate: addProfileMutate, isPending: addProfilePending } =
    useAddProfile();

  const isPending = profile ? editProfilePending : addProfilePending;

  const formHandler = () => {
    const newData = { ...profileData, price: +profileData.price };
    const { amenities, rules, ...rest } = newData;

    for (const key in rest) {
      const value = rest[key];

      if (!value) {
        return toast.error("مقادیر معتبر وارد کنید!");
      }
    }

    if (profile) {
      editProfileMutate(newData);
    } else {
      addProfileMutate(newData);
    }
  };

  return (
    <div className="mb-96 border-2 p-5 rounded-xl">
      <h3 className="text-[#304ffe] bg-[#304ffe]/25 p-3 font-normal text-2xl rounded-lg">
        {profile ? "ویرایش آگهی" : "ثبت آگهی"}
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
        <div className="flex items-center gap-4 max-[420px]:flex-wrap">
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
          onClick={formHandler}
          className="bg-[#304ffe] rounded-md w-full text-white py-2 mt-10 hover:bg-blue-700 transition-all duration-200 font-normal"
        >
          {profile ? "ویرایش آگهی" : "ثبت آگهی"}
        </button>
      )}
    </div>
  );
}

export default AddProfilePage;
