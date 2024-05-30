let passport = {
  name: "Petr",
  surname: "Petrov",
};

const newPassport = JSON.parse(JSON.stringify(passport));

newPassport.name = "Ivan";

console.log(passport.name);
console.log(newPassport.name);
