// Practice: Fulfil missing operators in equations and expressions

// ---------------------Завдання 1---------------------
// Дано: Функція яка приймає значення яке може бути будь-яким типом даних = "302", null, 128, 60

// Результат: Вивести у консоль числа які є степенем двійки та не більші заданого значення або вивести помилку про коректний тип якщо значення не є числом

// Приклад:

// 60 - 1, 2, 4, 8, 16, 32

// 64 - 1, 2, 4, 8, 16, 32, 64

// “32” - "incorrect type"

function printPowsOf2(number) {
  if (typeof number !== "number") {
    return console.error(typeof number);
  }
  //  for(let i=0; Math.pow(2, i)<=number; i+=1){
  //     if(Math.pow(2, i)===number){
  //        return console.log(number)
  //     }
  //  }
  for (let i = 1; Math.pow(2, i) <= number; i += 1) {
    if (Math.pow(2, i) <= number) {
      console.log(`значення 2 ^ ${i} = ${Math.pow(2, i)}`);
    }
  }
}

printPowsOf2("302");
printPowsOf2(null);
printPowsOf2(128);
printPowsOf2(60);

// -----------------------Завдання 2---------------------
// Дано: масив [3, 2, "2", null, 1.5, 9.5, undefined];

// Результат: Вивести у консоль суму чисел у масиві.

function calculateSumOfArray() {
  const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
  let sum = 0;
  initialArray.forEach((item) => {
    if (typeof item === "number") {
      return (sum += item);
    }
  });
  console.log(`сума чисел в масиві = ${sum}`);
}

calculateSumOfArray();

// -------------------------Завдання 3----------------------
// Дано: Функція яка приймає назва місяця у форматі = "DECEMBER" | "FEBRUARY" | "JULY" і тд.

// Результат: Вивести у консоль назву пори року якій відповідає даний місяць. “summer” | “autumn” | “winter” | “spring”.

function printSeasonByMonth(month) {
  switch (month) {
    case "DECEMBER":
    case "JANUARY":
    case "FEBRUARY":
      console.log("month of WINTER ");
      break;
    case "MARCH":
    case "APRIL":
    case "MAY":
      console.log("month of SPRING");
      break;
    case "JUNE":
    case "JULY":
    case "AUGUST":
      console.log("month of WINTER");
      break;
    case "SEPTEMBER":
    case "OCTOBER":
    case "NOVEMBER":
      console.log("month of SPRING");
      break;
  }
}

printSeasonByMonth("SEPTEMBER");
printSeasonByMonth("NOVEMBER");
printSeasonByMonth("JULY");
printSeasonByMonth("APRIL");

// ------------------------Завдання 4
// Дано: Функція яка приймає стрічку яка містить мінімум 1 слово та пробіли. Перший та останній символ не пробіли. Слова можуть бути розділені не лише одним пробілом.

// Результат: Вивести у консоль кількість слів у стрічці.

// Приклад:
// "Easy string for count" - 4 слова
// "Some string with a triple space" - 6 слів

function calculateWordsInString(string) {
  let value = 0;
  const array = string.split(" ");
  array.forEach((item) => {
    if (item != "") {
      value += 1;
    }
  });
  if (value === 1) {
    return console.log(`${value} слово`);
  }
  if (value >= 5) {
    return console.log(`${value} слів`);
  }

  return console.log(`${value} слова`);

  // let value
  // for(let i=0; i<=string.length; i+=1){
  //     console.log(string[i])
  // }
}
calculateWordsInString("Easy string for count");
calculateWordsInString("Easy");
calculateWordsInString("Some string with a triple   space");
calculateWordsInString("Some?  string, with a triple   space");


