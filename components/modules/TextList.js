import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function TextList({ type, title, profileData, setProfileData }) {
  const addHandler = () => {
    setProfileData((prev) => ({
      ...prev,
      [type]: [...prev[type], ""],
    }));
  };

  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...profileData[type]];
    list[index] = value;

    setProfileData((prev) => ({ ...prev, [type]: list }));
  };

  const deleteHandler = (index) => {
    const list = [...profileData[type]];
    list.splice(index, 1);
    setProfileData((prev) => ({ ...prev, [type]: list }));
  };

  return (
    <div className="mt-8">
      <p className="text-lg font-normal">{title}</p>
      <div>
        {profileData[type]?.map((inp, index) => (
          <div key={index} className="flex items-center gap-3 mb-3 mt-2">
            <input
              type="text"
              value={inp}
              onChange={(e) => changeHandler(e, index)}
              className="border-dashed border-2 border-[#304ffe] py-1 px-4 rounded-md w-80 outline-none focus:border-solid"
            />
            <button
              className="border-2 border-rose-600 font-normal py-1 px-3 text-rose-600 flex items-center gap-2 rounded-lg hover:bg-rose-700 hover:text-white transition-all duration-200"
              onClick={() => deleteHandler(index)}
            >
              حذف
              <AiOutlineDelete />
            </button>
          </div>
        ))}
        <button
          onClick={addHandler}
          className=" bg-[#304ffe] py-1 px-3 text-white flex items-center gap-2 rounded-lg mt-2 hover:bg-blue-700 transition-all duration-200"
        >
          افزودن
          <MdOutlineLibraryAdd />
        </button>
      </div>
    </div>
  );
}

export default TextList;
