const students = [
{id: 1646669480931, firstname: "Xidirboy  ", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
{id: 1646669480932, firstname: "Xidirboy", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
{id: 1646669480933, firstname: "Xidirboy", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
{id: 1646669480934, firstname: "Xidirboy", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
{id: 1646669480935, firstname: "Xidirboy", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
// {id: 1646669480936, firstname: "Xidirboy", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
// {id: 1646669480937, firstname: "Xidirboy", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
// {id: 1646669480938, firstname: "Xidirboy", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
// {id: 1646669480939, firstname: "Xidirboy", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
// {id: 1646669480910, firstname: "Xidirboy", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
// {id: 1646669480911, firstname: "Xidirboy", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
// {id: 1646669480912, firstname: "Xidirboy", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
// {id: 1646669480913, firstname: "Xidirboy", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
// {id: 1646669480914, firstname: "Xidirboy", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
// {id: 1646669480915, firstname: "Xidirboy", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
// {id: 1646669480916, firstname: "Xidirboy", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
// {id: 1646669480917, firstname: "Xidirboy", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
// {id: 1646669480918, firstname: "Xidirboy", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
// {id: 1646669480919, firstname: "Xidirboy", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
// {id: 1646669480920, firstname: "Xidirboy", lastname: "Rustamov", age: 21, address: "Jizzakh, Uzbekistan", status: "student",  univ: "TDTU", job: "Electro Technolog"},
];

export default students;

export function reverseNum(num) {
  return Math.floor(
    num.toString().split("").reverse().join("") / 100000000000
  ).toString();
}

