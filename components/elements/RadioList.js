function RadioList({
  title,
  type,
  name,
  id,
  value,
  profileData,
  setProfileData,
}) {
  const { category } = profileData;

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-cs-blue/25 py-1 px-3 w-fit rounded-lg flex items-center gap-2">
      <label htmlFor={id} className="text-cs-blue">
        {title}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        checked={category === value}
        onChange={changeHandler}
      />
    </div>
  );
}

export default RadioList;
