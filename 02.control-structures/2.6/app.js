let day;

for (;;) {
    let userInput = prompt("Please enter a number between 1 and 7:");
    
    if (userInput === "1" || userInput === "2" || userInput === "3" || userInput === "4" || userInput === "5" || userInput === "6" || userInput === "7") {
        switch (userInput) {
            case "1":
                day = "Monday";
                break;
            case "2":
                day = "Tuesday";
                break;
            case "3":
                day = "Wednesday";
                break;
            case "4":
                day = "Thursday";
                break;
            case "5":
                day = "Friday";
                break;
            case "6":
                day = "Saturday";
                break;
            case "7":
                day = "Sunday";
                break;
        }
        break;
    } else {
        alert("Invalid input. Please enter a number between 1 and 7.");
    }
}

alert(day);
