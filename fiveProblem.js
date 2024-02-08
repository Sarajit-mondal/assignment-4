// Problem 1: help the zoo manager
function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Invalid Number! please write positive number";
  } else if (typeof ticketSale !== "number" && typeof ticketSale !== "string") {
    return "Invalid Number";
  } else {
    const everyDayFixedCost = 500 + 50 * 8;
    const totalSales = ticketSale * 120;

    const profitLose = totalSales - everyDayFixedCost;
    return profitLose;
  }
}
// Problem 1 end: help the zoo manager

// Problem 2 : Good Name, BadName

function checkName(nameGD) {
  if (typeof nameGD !== "string") {
    return "Invaild Input! Please write string data";
  } else {
    const name = nameGD.trim();
    const goodCha = ["A", "y", "i", "e", "o", "u", "w"];
    const lastCharacter = name.at(-1);
    const lastCha = lastCharacter.toLowerCase();

    const goodname = goodCha.filter((good) => good === lastCha);

    if (goodname.toString() == lastCha) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  }
}
// Problem 2 end : Good Name, BadName

// Problem 03: Virus in my Array
function deleteInvalids(array) {
  if (Array.isArray(array)) {
    let validsArray = [];
    for (let i of array) {
      if (typeof i === "number" && isNaN(i) !== true) {
        validsArray.push(i);
      }
    }
    return validsArray;
  } else {
    return "Invalid input! Please input Right Array";
  }
}
// Problem 03 end: Virus in my Array

// Problem 04 : Make a Great Password
function password(obj) {
  if (typeof obj !== "object") {
    return "invalid";
  } else if (!obj.name || !obj.siteName || !obj.birthYear) {
    return "Invalid Propaty";
  } else if (obj.birthYear.toString().length !== 4) {
    return "Invalid birtYear";
  } else if (
    typeof obj.name !== "string" ||
    typeof obj.siteName !== "string" ||
    typeof obj.birthYear !== "number"
  ) {
    return "Invalid Please input right data Type";
  }
  // validation
  else {
    let siteName = "";
    for (let i = 0; i < obj.siteName.length; i++) {
      if (i === 0) {
        siteName += obj.siteName[i].toUpperCase();
      } else {
        siteName += obj.siteName[i];
      }
    }
    const password = siteName + "#" + obj.name + "@" + obj.birthYear;

    return password;
  }
}
// Problem 04 end : Make a Great Password

// problem 05: Monthly saving of a Freelancer
function monthlySavings(arr, cost) {
  // You have to write your code here
  if (Array.isArray(arr) || typeof cost === "number") {
    let income = 0;
    let tax = 0;

    for (let i of arr) {
      if (i >= 3000) {
        const thisTax = (i / 100) * 20;
        tax += thisTax;
        income += i - thisTax;
      } else {
        income += i;
      }
    }
    let save = income - cost;

    if (save >= 0) {
      return save + " Total savings";
    } else {
      return "earn more";
    }
  } else {
    return "Invalid input";
  }
}
problem 05 end: Monthly saving of a Freelancer

Problem 1 drive code help the zoo manager
console.log(calculateMoney(-130));

problem 2: drive code checkName
console.log(checkName(["Rashed"]));

Virus in my Array drive code
console.log(deleteInvalids({ num: [1, 2, 3] }));

Problem 04 drive code: Make a Great Password
console.log(password([99999]));

console.log(monthlySavings([1000, 2000, 3000], 5400));
