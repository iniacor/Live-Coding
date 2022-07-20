// ОбЪект в массив пользователей
// algo
// 1 Итерируемся по объекту
// 2 Получаем values  объекта
// 3 получаем ключ объекта
// 4 Добавляем на каждой итерации ключ в значение

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

const getCustomersList = obj => {
  return Object.values(obj)
    .map((customer, index) => {
      const customerAddId = { ...customer };
      customerAddId.id = Object.keys(obj)[index];
      return customerAddId;
    })
    .sort((firstCustomer, secondCustomer) => firstCustomer.age - secondCustomer.age);
};
// test Data
// console.log(getCustomersList(customers));

// ============ refactoring ===========
// const getCustomersList = obj =>
//   Object.entries(obj)
//     .map(([id, customer]) => ({ id, ...customer }))
//     .sort((a, b) => (a.age > b.age ? 1 : -1));
// test Data
// console.log(getCustomersList(customers));
