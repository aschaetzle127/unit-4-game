$(document).ready(function() {
    // create global variables
    var wins = 0;
    var losses = 0;
    $(".wins-text").text("Wins: " + wins);
    $(".losses-text").text("Losses: " + losses);
    var crystalImages = ["assets/images/crystal-1.png", "assets/images/crystal-2.png", "assets/images/crystal-3.png", "assets/images/crystal-1.png"];

    // assign random numbers to gems
    function crystalValues() {
        for (var i=0; i<crystalImages.length; i++) {
            var image = $("<img>");
            image.addClass("crystal-buttons");
            image.attr("src", crystalImages[i]);
            image.attr("data-letter", Math.floor(Math.random() * 12) +1);
            $("#crystals").append(image);
        }
    }

    // create function playGame

    function playGame() {
        var counter = 0;
        $(".your-guess").text("Your points: " + counter);

        var targetNumber = Math.floor(Math.random() * (120-19) + 19);
        $(".random-number").text("Your target: " + targetNumber);
        console.log(targetNumber);

        $(".crystal-buttons").on("click", function() {

            gemIsClicked = true;
            var gemValue = ($(this).attr("data-letter"));
            gemValue = parseInt(gemValue);
            counter += gemValue;

            console.log(gemValue);
            console.log(counter);

            $(".your-guess").text("Your points: " + counter);

            if (counter === targetNumber) {
                alert("WINNER!!");
                wins ++;
                $(".wins-text").text("Wins: " + wins);
                $("#crystals").empty();
                crystalValues();
                playGame();
            }
            else if (counter > targetNumber) {
                alert("SORRY! YOU LOSE!");
                losses++;
                $(".losses-text").text("Losses: " + losses);
                $("#crystals").empty();
                crystalValues();
                playGame();
            }
        });
    }

    crystalValues();
    playGame();





});