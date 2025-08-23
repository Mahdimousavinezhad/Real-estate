function ItemList({ data }) {
  return (
    <>
      {data.length ? (
        <ul className="pr-5 mb-[50px] list-disc marker:text-cs-blue">
          {data.map((item, index) => (
            <li key={index} className="">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mb-10">هیچ موردی ذکر نشده است!</p>
      )}
    </>
  );
}

export default ItemList;
