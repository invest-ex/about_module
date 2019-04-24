const faker = require('faker');

const AV = [
  30.35, 33.05, 21.07, 13.61, 13.67, 8.82, 14.35, 64.57, 15.29, 24.58, 20.60, 25.79,
  21.85, 33.73, 11.42, 6.75, 8.30, 17.18, 10.28, 16.44, 21, 10.26, 18.14, 6.83, 16.95,
  5.80, 11.88, 16.67, 12.79, 8.12, 17.01, 11.42, 111.76, 7.65, 19.09, 6.54, 6.75, 7.75,
  12.92, 8.08, 13.06, 31.10, 14.64, 9.33, 35.61, 13.75, 2.92, 11.55, 5.86, 8.74, 6.71,
  7.29, 10.15, 19.30, 4.59, 8.55, 1.77, 16.44, 3.05, 34.27, 17.90, 12.46, 12.07, 3.47,
  11.37, 6.88, 3.87, 13.33, 44.77, 8.54, 6.00, 13.26, 8.08, 27.75, 14.38, 3.94, 11.88,
  85.96, 27.88, 12.98, 9.16, 19.26, 10.15, 14.99, 3.27, 5.34, 11.45, 10.71, 22.41,
  3.19, 10.3, 5.34, 10.14, 7.21, 3.88, 13.07, 6.42, 9.16, 4.88, 5.55,
];

const headers = ['userId', 'equity', 'cost', 'shares', 'TR', 'PD', 'AV'];
console.log(headers.join('|'));

for (let i = 1; i <= 10000000; i++) {
  const sampleUsers = {
    userId: i,
    equity: faker.finance.amount(5000, 20000, 2),
    cost: faker.finance.amount(2000, 10000, 2),
    shares: faker.random.number(300),
    TR: faker.finance.amount(100, 2000, 2),
    PD: faker.finance.amount(0, 100, 2),
    AV: AV[Math.floor(Math.random() * AV.length)],
  };
  // const insertUsers = () => {
  //   User.create(sampleUsers)
  //     .then(() => db.close())
  //     .catch(err => console.log('errrerererer2', err));
  // };
  // insertUsers();
  const csvData = headers.map(columnName => {
    const value = sampleUsers[columnName];
    if (typeof value === "number") {
      return value;
    } else {
      return `'${value}'`
    }
  });
  const csv = csvData.join('|');
  console.log(csv);
}

console.error(Math.floor(process.uptime()));
