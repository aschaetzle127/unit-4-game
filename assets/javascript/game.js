$(document).ready(function() {
    // create global variables
    var wins = 0;
    var losses = 0;
    $(".wins-text").text("Wins: " + wins);
    $(".losses-text").text("Losses: " + losses);
    var gemImages = ["assets/images/crystal-1.png", "assets/images/crystal-2.png", "assets/images/crystal-3.png", "assets/images/crystal-1.png"];

    // assign random numbers to gems
    function gemValues() {
        for (var i=0; i<gemImages.length; i++) {
            var image = $("img");
            image.addClass("gem-buttons gem gem-image");
            image.attr("src", gemImages[i]);
            image.attr("date-letter", Math.floor(Math.random() * 15) +1);
            $("#gems").append(image);
        }
    }

    // create function playGame

    function playGame() {
        var counter = 0;
        $(".your-guess").text("Your points: " + counter);

        var targetNumber = Math.floor(Math.random() * 100);
        $(".random-number").text("Your target: " + targetNumber);
        console.log(targetNumber);

        $(".gem-buttons").click(function() {

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
                $("#gems").empty();
                gemValues();
                playGame();
            }
            else if (counter > targetNumber) {
                alert("SORRY! YOU LOSE!");
                losses++;
                $(".losses-text").text("Losses: " + losses);
                $("#gems").empty();
                gemValues();
                playGame();
            }
        });
    }

    gemValues();
    playGame();





});