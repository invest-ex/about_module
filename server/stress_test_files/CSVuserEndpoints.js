console.log('user');

const allUsers = [];
for (let i = 0; i < 10000000; i++) {
  allUsers.push(i);
}

const alreadyChosen = {};

function generatePowerUsers() {
  const users = [];
  while (users.length < 100) {
    const ranNum = Math.floor(Math.random() * allUsers.length);
    const user = allUsers[ranNum];
    if (!alreadyChosen[user]) {
      users.push(user);
      alreadyChosen[user] = true;
    }
  }
  return users;
}

function generateWeekendUsers() {
  const users = [];
  while (users.length < 500) {
    const ranNum = Math.floor(Math.random() * allUsers.length);
    const user = allUsers[ranNum];
    if (!alreadyChosen[user]) {
      users.push(user);
      alreadyChosen[user] = true;
    }
  }
  return users;
}

const testUsers = [];
function generateUsers() {
  const powerUsers = generatePowerUsers();
  const weekendUsers = generateWeekendUsers();
  for (let i = 0; i < 5000; i++) {
    const chosen = Math.random();
    if (chosen < 0.75) {
      const user = Math.floor(Math.random() * powerUsers.length);
      testUsers.push(powerUsers[user]);
    } else if (chosen < 0.9) {
      const user = Math.floor(Math.random() * weekendUsers.length);
      testUsers.push(weekendUsers[user]);
    } else {
      const user = Math.floor(Math.random() * allUsers.length);
      testUsers.push(allUsers[user]);
    }
  }
}

generateUsers();

export default testUsers;
