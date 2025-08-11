import { p2e } from "@/utils/replaceNumber";

function TextInput({
  title,
  type,
  name,
  placeholder,
  profileData,
  setProfileData,
}) {
  const baseClass =
    "border-dashed border-2 border-[#304ffe] py-2 px-4 rounded-md w-80 outline-none focus:border-solid";

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setProfileData((prev) => ({ ...prev, [name]: p2e(value) }));
  };

  return (
    <div className="flex flex-col gap-3 mt-7">
      <label htmlFor={name} className="text-lg">
        {title}
      </label>
      {type === "textarea" ? (
        <textarea
          type={type}
          value={profileData[name]}
          name={name}
          placeholder={placeholder}
          onChange={changeHandler}
          className={`${baseClass} h-32`}
        />
      ) : (
        <input
          type={type}
          value={profileData[name]}
          name={name}
          placeholder={placeholder}
          onChange={changeHandler}
          className={baseClass}
        />
      )}
    </div>
  );
}

export default TextInput;
