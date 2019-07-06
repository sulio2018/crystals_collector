$(document).ready(function () {

    //set up computer number

    var targetNumber = 19 + Math.floor(Math.random() * 120);

    $("#computer-number").html(targetNumber);

    //set up random number for every crystal.

    var crystalOne = 1 + Math.floor(Math.random() * 12);
    var crystalTwo = 1 + Math.floor(Math.random() * 12);
    var crystalThree = 1 + Math.floor(Math.random() * 12);
    var crystalFour = 1 + Math.floor(Math.random() * 12);

    //set the scores variables

    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    $("#total-score-number").html(totalScore);

    //set up functions and .onclick events

    function win() {
        wins = wins++;
        $("#wins").html(wins);
        gameRestartOne();
        gameRestartTwo();
    }

    function lose() {
        losses = losses++;
        $("#losses").html(losses);
        gameRestartOne();
        gameRestartTwo();
    }

    $("#img1").on("click", function() {
        totalScore = totalScore + crystalOne
        $("#total-score-number").html(totalScore);
        if (totalScore === targetNumber) {
            win();
            gameRestartOne();
            gameRestartTwo();
        } else if (totalScore > targetNumber) {
            lose();
            gameRestartOne();
            gameRestartTwo();
        }
    });

    $("#img2").on("click", function() {
        totalScore = totalScore + crystalTwo
        $("#total-score-number").html(totalScore);
        if (totalScore === targetNumber) {
            win();
            gameRestartOne();
            gameRestartTwo();
        } else if (totalScore > targetNumber) {
            lose();
            gameRestartOne();
            gameRestartTwo();
        }
    });

    $("#img3").on("click", function() {
        totalScore = totalScore + crystalThree
        $("#total-score-number").html(totalScore);
        if (totalScore === targetNumber) {
            win();
            gameRestartOne();
            gameRestartTwo();
        } else if (totalScore > targetNumber) {
            lose();
            gameRestartOne();
            gameRestartTwo();
        }
    });

    $("#img4").on("click", function() {
        totalScore = totalScore + crystalFour
        $("#total-score-number").html(totalScore);
        if (totalScore === targetNumber) {
            win();
            gameRestartOne();
            gameRestartTwo();
        } else if (totalScore > targetNumber) {
            lose();
            gameRestartOne();
            gameRestartTwo();
        }
    });

    //game restart parameters

    function gameRestartOne() {
        totalScore = 0;
        $("#totalScore").html(totalScore);
    }

    function gameRestartTwo() {
        targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $("computer-number").html(targetNumber);
        crystalOne = Math.floor(Math.random() * 12) + 1;
        crystalTwo = Math.floor(Math.random() * 12) + 1;
        crystalThree = Math.floor(Math.random() * 12) + 1;
        crystalFour = Math.floor(Math.random() * 12) + 1;
    }



})