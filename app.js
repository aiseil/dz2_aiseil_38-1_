function convertToRoman(num) {
    if (num < 1 || num > 9) {
        return "Число должно быть от 1 до 9";
    }

    let romanNumeral = "";
    switch (num) {
        case 1:
            romanNumeral = "I";
            break;
        case 2:
            romanNumeral = "II";
            break;
        case 3:
            romanNumeral = "III";
            break;
        case 4:
            romanNumeral = "IV";
            break;
        case 5:
            romanNumeral = "V";
            break;
        case 6:
            romanNumeral = "VI";
            break;
        case 7:
            romanNumeral = "VII";
            break;
        case 8:
            romanNumeral = "VIII";
            break;
        case 9:
            romanNumeral = "IX";
            break;
        default:
            romanNumeral = "Число должно быть от 1 до 9";
    }

    return romanNumeral;
}

// Пример использования:
console.log(convertToRoman(3)); // Вывод: "III"
function calculatePoints(cardType, liters) {
    let points = 0;
    if (cardType === "SILVER") {
        points = liters * 0.5;
    } else if (cardType === "GOLD") {
        points = liters * 0.75;
    } else if (cardType === "PLATINUM") {
        points = liters * 1;
    } else {
        return "Неправильный тип карты";
    }
    return points;
}

// Пример использования:
console.log(calculatePoints("SILVER", 10)); // Вывод: 5
function calculatePoints(cardType, liters) {
    let points = 0;
    switch (cardType) {
        case "SILVER":
            points = liters * 0.5;
            break;
        case "GOLD":
            points = liters * 0.75;
            break;
        case "PLATINUM":
            points = liters * 1;
            break;
        default:
            return "Неправильный тип карты";
    }
    return points;
}

// Пример использования:
console.log(calculatePoints("GOLD", 10)); // Вывод: 7.5


3
function calculateLitersIfElse(fuelType, amount) {
    let liters = 0;
    if (fuelType === "АИ-92") {
        liters = amount / 50; // Предположим, что цена за литр АИ-92 равна 50 сомам
    } else if (fuelType === "АИ-95") {
        liters = amount / 55; // Предположим, что цена за литр АИ-95 равна 55 сомам
    } else if (fuelType === "АИ-98") {
        liters = amount / 60; // Предположим, что цена за литр АИ-98 равна 60 сомам
    } else if (fuelType === "ДТ") {
        liters = amount / 45; // Предположим, что цена за литр ДТ равна 45 сомам
    } else if (fuelType === "Газ") {
        liters = amount / 25; // Предположим, что цена за литр газа равна 25 сомам
    } else {
        return "Неправильный тип топлива";
    }
    return liters;
}

// Пример использования:
console.log(calculateLitersIfElse("АИ-95", 550)); // Вывод: 10
function calculateLitersSwitchCase(fuelType, amount) {
    let liters = 0;
    switch (fuelType) {
        case "АИ-92":
            liters = amount / 50;
            break;
        case "АИ-95":
            liters = amount / 55;
            break;
        case "АИ-98":
            liters = amount / 60;
            break;
        case "ДТ":
            liters = amount / 45;
            break;
        case "Газ":
            liters = amount / 25;
            break;
        default:
            return "Неправильный тип топлива";
    }
    return liters;
}

// Пример использования:
console.log(calculateLitersSwitchCase("Газ", 500)); // Вывод: 20