import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function CustomeDatePicker({ profileData, setProfileData }) {
  const changeHandler = (event) => {
    const value = new Date(event);
    setProfileData((prev) => ({ ...prev, constructionDate: value }));
  };

  return (
    <div className="mt-10">
      <p className="font-normal mb-4">تاریخ ساخت</p>
      <div>
        <DatePicker
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          value={profileData.constructionDate}
          onChange={changeHandler}
          inputClass="border-dashed border-2 border-[#304ffe] py-2 px-4 rounded-md w-60 outline-none focus:border-solid"
        />
      </div>
    </div>
  );
}

export default CustomeDatePicker;
