const myFunc = (number1, number2, ...n) => {
  const sumOfElements = number1 + number2;
  let multiplyedElements = 1;

  for (let i = 0; i < n.length; i++) {
    multiplyedElements *= n[i];
  }
  return [sumOfElements, multiplyedElements];
};

console.log(myFunc(10, 2, 2, 4, 5, 4, 42));

// -------------------------------  2 ------------------------------- //

const user = {
  banks: [
    {
      address: {
        city: "Tbilisi",
      },
    },
    {
      address: {
        city: "Qutaisi",
      },
    },
    {
      address: {
        city: "Rustavi",
      },
    },
  ],
};

const getCity = (user) => {
  const { banks: [, , { address: { city } = {} } = {}] = [] } = user;

  return city; // თუ city არ არსებობს, დაბრუნდება undefined
};

console.log(getCity(user));

// ------------------------------ 2 -------------------- //

const myObj = {
  name: "Avto",
  age: 19,
  adress: {
    tbilisi: "Samgori",
    qutaisi: "Chavchavadze",
  },
};
const copyMyObj = (myObj) => {
  const newObj = {
    ...myObj,
    adress: {
      ...myObj.adress,
    },
  };
  return newObj;
};

console.log(copyMyObj(myObj));
