const passportMarried = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "Bobryisk",
  },
};

const passportMarried2 = { ...passportMarried, address: { ...passportMarried.address } };

passportMarried2.married = true;

console.log(passportMarried);
console.log(passportMarried2);
