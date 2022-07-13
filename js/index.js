// const withdraw = (clients, balances, client, amount) => {
// remote logic from if
// ger rid of duplicated code
// don't use find

//bad
//   balances.find((item, index) => clients.indexOf(client) === index);
//   if (balances.find((item, index) => clients.indexOf(client) === index) < amount) {
//     return -1;
//   }
//   return balances.find((item, index) => clients.indexOf(client) === index) - amount;
// };

// const withdraw = (clients, balances, client, amount) => {
//   const balance = balances[clients.indexOf(client)];

//   return balances[clients.indexOf(client)] >= amount
//     ? (balances[clients.indexOf(client)] -= amount)
//     : -1;
// };

// BAD
// const withdraw = (clients, balances, client, amount) => {
//   let clientBalance = balances[clients.indexOf(client)];
//   if (clientBalance >= amount) {
//     clientBalance -= amount;
//     balances[clients.indexOf(client)] = clientBalance;
//     return clientBalance;
//   }

//   return -1;
// };
//GOOD
// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);

//   if (balances[clientIndex] < amount) {
//     return -1;
//   }

//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };

// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);
//   const newBalance = balances[clientIndex] - amount;
//   return newBalance > 0 ? newBalance : -1;
// };

//NORM
// const withdraw = function (clients, balances, client, amount) {
//   if (balances[clients.indexOf(client)] - amount < 0) {
//     return -1;
//   }
//   balances[clients.indexOf(client)] -= amount;
//   return balances[clients.indexOf(client)];
// };
// GOOd
// const withdraw = function (clients, balances, client, amount) {
//   const clientIndex = clients.indexOf(client);

//   if (balances[clientIndex] < amount) {
//     return -1;
//   }

//   balances[clientIndex] -= amount;

//   return balances[clientIndex];
// };

// DIMA
// const withdraw = (clients, balances, client, amount) => {
//   const clientBalance = balances[clients.indexOf(client)];

//   return clientBalance < amount ? -1 : clientBalance - amount;
// };

// const withdraw = (clients, balances, client, amount) => {
//   if (balances[clients.indexOf(client)] > amount) {
//     return (balances[clients.indexOf(client)] -= amount);
//   } else {
//     return -1;
//   }
// };

// const getRandomNumbers = (length, from, to) => {
//   const fromCeil = Math.ceil(from);
//   const toCeil = Math.ceil(to);

//   if (toCeil - fromCeil < 1) {
//     return null;
//   }

//   return new Array(length).fill(Math.trunc(Math.random() * (toCeil - fromCeil) + fromCeil));
// };
