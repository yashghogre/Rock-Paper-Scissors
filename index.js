var randomOption = ["Rock", "Paper", "Scissors"];

$(".rock").click(function () {

    var randomOptionNumber = Math.floor(Math.random() * 3);

    var randomOptionChoice = randomOption[randomOptionNumber];

    $(".myChosenOption").html("Rock");
    $(".compChosenOption").html(randomOptionChoice);
    console.log(randomOptionNumber);


    var myChoice = $(".myChosenOption").html();
    var oppChoice = $(".compChosenOption").html();

    if (myChoice == oppChoice) {
        $(".title").html("It's a Draw!🃏");
    }
    else if ((myChoice == "Rock" && oppChoice == "Paper") || (myChoice == "Paper" && oppChoice == "Scissors") || (myChoice == "Scissors" && oppChoice == "Rock")) {
        $(".title").html("You Lost!👎");
    }
    else if ((myChoice == "Rock" && oppChoice == "Scissors") || (myChoice == "Paper" && oppChoice == "Rock") || (myChoice == "Scissors" && oppChoice == "Paper")) {
        $(".title").html("You Win!🎉");
    }
});

$(".paper").click(function () {

    var randomOptionNumber = Math.floor(Math.random() * 3);

    var randomOptionChoice = randomOption[randomOptionNumber];

    $(".myChosenOption").html("Paper");
    $(".compChosenOption").html(randomOptionChoice);
    console.log(randomOptionNumber);


    var myChoice = $(".myChosenOption").html();
    var oppChoice = $(".compChosenOption").html();

    if (myChoice == oppChoice) {
        $(".title").html("It's a Draw!🃏");
    }
    else if ((myChoice == "Rock" && oppChoice == "Paper") || (myChoice == "Paper" && oppChoice == "Scissors") || (myChoice == "Scissors" && oppChoice == "Rock")) {
        $(".title").html("You Lost!👎");
    }
    else if ((myChoice == "Rock" && oppChoice == "Scissors") || (myChoice == "Paper" && oppChoice == "Rock") || (myChoice == "Scissors" && oppChoice == "Paper")) {
        $(".title").html("You Win!🎉");
    }
});

$(".scissors").click(function () {

    var randomOptionNumber = Math.floor(Math.random() * 3);

    var randomOptionChoice = randomOption[randomOptionNumber];

    $(".myChosenOption").html("Scissors");
    $(".compChosenOption").html(randomOptionChoice);
    console.log(randomOptionNumber);


    var myChoice = $(".myChosenOption").html();
    var oppChoice = $(".compChosenOption").html();

    if (myChoice == oppChoice) {
        $(".title").html("It's a Draw!🃏");
    }
    else if ((myChoice == "Rock" && oppChoice == "Paper") || (myChoice == "Paper" && oppChoice == "Scissors") || (myChoice == "Scissors" && oppChoice == "Rock")) {
        $(".title").html("You Lost!👎");
    }
    else if ((myChoice == "Rock" && oppChoice == "Scissors") || (myChoice == "Paper" && oppChoice == "Rock") || (myChoice == "Scissors" && oppChoice == "Paper")) {
        $(".title").html("You Win!🎉");
    }
});


