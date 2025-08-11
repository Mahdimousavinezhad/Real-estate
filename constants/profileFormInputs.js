const textInputInfo = [
  {
    id: 1,
    title: "عنوان آگهی",
    type: "text",
    name: "title",
    placeholder: "عنوان محصول خود را وارد کنید",
  },
  {
    id: 2,
    title: "توضیحات",
    type: "textarea",
    name: "description",
    placeholder: "توضیحات محصول خود را وارد کنید",
  },
  {
    id: 3,
    title: "آدرس",
    type: "text",
    name: "location",
    placeholder: "آدرس خود را وارد کنید",
  },
  {
    id: 4,
    title: "شماره تماس",
    type: "text",
    name: "phone",
    placeholder: "شماره تماس خود را وارد کنید",
  },
  {
    id: 5,
    title: "قیمت(تومان)",
    type: "number",
    name: "price",
    placeholder: "قیمت خود را وارد کنید",
  },
  {
    id: 6,
    title: "بنگاه",
    type: "text",
    name: "realState",
    placeholder: "بنگاه خود را وارد کنید",
  },
];

const radioInputInfo = [
  {
    title: "ویلا",
    type: "radio",
    name: "category",
    id: "villa",
    value: "villa",
  },
  {
    title: "آپارتمان",
    type: "radio",
    name: "category",
    id: "apartment",
    value: "apartment",
  },
  {
    title: "مغازه",
    type: "radio",
    name: "category",
    id: "store",
    value: "store",
  },
  {
    title: "دفتر",
    type: "radio",
    name: "category",
    id: "office",
    value: "office",
  },
];

export { textInputInfo, radioInputInfo };
