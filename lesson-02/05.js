let passport = {
  name: "Petr",
  surname: "Petrov",
};

const newPassport = { ...passport };

newPassport.name = "Ivan";

console.log(passport.name);
console.log(newPassport.name);
