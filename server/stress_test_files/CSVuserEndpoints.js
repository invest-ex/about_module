console.log('user');

const allUsers = [];
for (let i = 0; i < 10000000; i++) {
  allUsers.push(i);
}

const powerUsers = generatePowerUsers();
const weekendUsers = generateWeekendUsers();

const checker = {};

function generatePowerUsers() {
  const users = [];
  while (users.length < 1000) {
    const ranNum = Math.floor(Math.random() * allUsers.length);
    const user = allUsers[ranNum];
    if (!checker[user]) {
      users.push(user);
      checker[user] = true;
    }
  }
  return users;
}

function generateWeekendUsers() {
  const users = [];
  while (users.length < 10000) {
    const ranNum = Math.floor(Math.random() * allUsers.length);
    const user = allUsers[ranNum];
    if (!checker[user]) {
      users.push(user);
      checker[user] = true;
    }
  }
  return users;
}

function generateUsers() {
  const chosen = Math.random();
  if (chosen < 0.75) {
    const user = Math.floor(Math.random() * powerUsers.length);
    console.log(powerUsers[user]);
  } else if (chosen < 0.9) {
    const user = Math.floor(Math.random() * weekendUsers.length);
    console.log(weekendUsers[user]);
  } else {
    const user = Math.floor(Math.random() * allUsers.length);
    console.log(allUsers[user]);
  }
}

generateUsers();
