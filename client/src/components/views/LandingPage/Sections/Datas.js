const categories = [
  {
    _id: 1,
    name: "OUTER",
  },
  {
    _id: 2,
    name: "TOP",
  },
  {
    _id: 3,
    name: "BOTTOM",
  },
  {
    _id: 4,
    name: "SHOES",
  },
  {
    _id: 5,
    name: "BAG",
  },
  {
    _id: 6,
    name: "ACCESSORY",
  },
  {
    _id: 7,
    name: "LIFESTYLE",
  },
];

const brands = [
  {
    _id: 1,
    name: "ASICS",
  },
  {
    _id: 2,
    name: "BLANKOF",
  },
  {
    _id: 3,
    name: "BLUEPEACE FISHING CLUB",
  },
  {
    _id: 4,
    name: "CESPA",
  },
  {
    _id: 5,
    name: "DETAIL INC",
  },
  {
    _id: 6,
    name: "DOCUMENT",
  },
  {
    _id: 7,
    name: "FRESH SERVICE",
  },
  {
    _id: 8,
    name: "GARMENT DYEING SERVICE",
  },
  {
    _id: 9,
    name: "HATSKI",
  },
  {
    _id: 10,
    name: "NEITHERS",
  },
  {
    _id: 11,
    name: "NEW BALANCE",
  },
];

const price = [
  {
    _id: 0,
    name: "전체보기",
    array: [],
  },
  {
    _id: 1,
    name: "~ 50,000원",
    array: [0, 50000],
  },
  {
    _id: 2,
    name: "50,000원 ~ 100,000원",
    array: [50001, 100000],
  },
  {
    _id: 3,
    name: "100,000원 ~ 150,000원",
    array: [100001, 150000],
  },
  {
    _id: 4,
    name: "150,000원 ~ 200,000원",
    array: [150001, 200000],
  },
  {
    _id: 5,
    name: "200,000원 ~",
    array: [200001, 999999],
  },
];

export { categories, brands, price };
