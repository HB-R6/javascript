const employee = {
  name: "John",
  active: false,
};

function activate(user) {
  user.active = true;
}

console.log(employee);
activate(employee);
console.log(employee);
