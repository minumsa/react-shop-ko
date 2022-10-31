const continents = [
  {
    _id: 1,
    name: 'Africa',
  },
  {
    _id: 2,
    name: 'Europe',
  },
  {
    _id: 3,
    name: 'Asia',
  },
  {
    _id: 4,
    name: 'North America',
  },
  {
    _id: 5,
    name: 'South America',
  },
  {
    _id: 6,
    name: 'Australia',
  },
  {
    _id: 7,
    name: 'Antarctica',
  },
];

const price = [
  {
    _id: 0,
    name: '전체보기',
    array: [],
  },
  {
    _id: 1,
    name: '~ 50,000원',
    array: [0, 50000],
  },
  {
    _id: 2,
    name: '50,000원 ~ 100,000원',
    array: [50001, 100000],
  },
  {
    _id: 3,
    name: '100,000원 ~ 150,000원',
    array: [100001, 150000],
  },
  {
    _id: 4,
    name: '150,000원 ~ 200,000원',
    array: [150001, 200000],
  },
  {
    _id: 5,
    name: '200,000원 ~',
    array: [200001, 999999],
  },
];

export { continents, price };
