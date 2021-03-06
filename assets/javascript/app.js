//ready function to prep the page and contain the bulk of the code
$(document).ready(function () {
    //object for all question and answer info
    var questions = {
        one: {
            question: "Who was the killer in the 1980 slasher classic, Friday the 13th?",
            answers: ["Freddy Krueger", "Jason Voorhees", "Michael Myers", "Pamela Voorhees"],
            correct: "Pamela Voorhees"
        },
        two: {
            question: "Jamie Lee Curtis is famous for playing which character from the 1978 film, Halloween?",
            answers: ["Annie Brackett", "Laurie Strode", "Lindsey Wallace", "Judith Myers"],
            correct: "Laurie Strode"
        },
        three: {
            question: "Which of the below is NOT one of the Cenobites from the 1987 film, Hellraiser?",
            answers: ["Pinhead", "Butterball", "Chatterbox", "Dreamer"],
            correct: "Dreamer"
        },
        four: {
            question: "What was the name of Dr. Frankensteins assistant in the 1931 film, Frankenstein?",
            answers: ["Fritz", "Igor", "Johan", "Frederick"],
            correct: "Fritz"
        },
        five: {
            question: "In the 1984 horror classic, A Nightmare on Elm Street, we see one of the first major film appearances by which actor?",
            answers: ["Kevin Bacon", "Keifer Sutherland", "Johnny Depp", "Tom Cruise"],
            correct: "Johnny Depp"
        },
        six: {
            question: "In the 2004 film, Saw, the killer used a puppet as his proxy to antagonize his victims. What was the name of the puppet?",
            answers: ["Billy", "Zeppo", "Jigsaw", "Howdy Doody"],
            correct: "Billy"
        },
        seven: {
            question: "What was the official, credited name for the monster in the 1954 classic, the Creature from the Black Lagoon?",
            answers: ["Fish-man", "Gill-man", "Lagoon-beast", "Water-beast"],
            correct: "Gill-man"
        },
        eight: {
            question: "In the 1974 slasher film, the Texas Chainsaw Massacre, what is the name of the chainsaw weilding killer?",
            answers: ["The Hitchhiker", "Drayton Sawyer", "Leatherface", "Candyman"],
            correct: "Leatherface"
        },
        nine: {
            question: "In the 1968 classic, Night of the Living Dead, what is the name of the lead actress' character; famously taunted in a graveyard by her brother right before he meets his untimely end?",
            answers: ["Helen", "Karen", "Judy", "Barbara"],
            correct: "Barbara"
        },
        ten: {
            question: "In the 2008 horror anthology, Trick 'r Treat, the antagonist, Sam, punishes those who don't follow the rules of Halloween. Which one of these is NOT a rule of Halloween?",
            answers: ["Never prank a decorated home", "Always give candy to trick-or-treaters", "Respect the dead", "Always wear a costume"],
            correct: "Never prank a decorated home"
        },
        eleven: {
            question: "In the 1931 monster movie classic, Dracula, Bela Lugosi portrayed one of the most famous roles of his lifetime. What was the name of the insect eating toady who does Draculas bidding?",
            answers: ["John", "Dr. Seward", "Martin", "Renfield"],
            correct: "Renfield"
        },
        twelve: {
            question: "In the 1999 remake of the Castle Films, House on Haunted Hill, the guests are being payed to stay overnight in what haunted building instead of a house?",
            answers: ["Schoolhouse", "Mental Asylum", "Hospital", "Hotel"],
            correct: "Mental Asylum"
        },
        thirteen: {
            question: "Which of these revolutionary films is lauded as the first true horror film?",
            answers: ["Psycho", "Night of the Living Dead", "The Cabinet of Dr. Caligari", "The Hunchback of Notre Dame"],
            correct: "The Cabinet of Dr. Caligari"
        },
    };
    //array to help me iterate and insert images
    var imgArray = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8", "question9", "question10", "question11", "question12", "question13"];
    var currentQuestion = 0;
    var movieImg = $("<div class='img'></div>");
    
    //variable for the background music element
    var music = document.getElementById("background-music");

    var win = 0;
    var lose = 0;
    var unanswered = 0;
    var time = 30;

    //set up divs to contain our info
    var rightDiv = $("<div class='rightAns'></div>");
    var timerDiv = $("<div class='countdown'><h3></h3></div>");
    var questionDiv = $("<div class='question'><h1></h1></div><br>");
    var answerDiv = $("<div class='answers'></div>");

    //object keys to return questions in order
    var keys = Object.keys(questions);
    var key = keys[n];
    var n = 0;

    //function to start site audio
    function backgroundMusic () {
        $("#start-button").on("click", music.play());
    }

    //function to setup and restart game
    function reset() {
        $("#start-button").hide("slow");
        $("#start-here").hide("slow");
        win = 0;
        lose = 0;
        unanswered = 0;
        n = 0;
        key = keys[n];
        currentQuestion = 0;
        $("#question-block").empty();

        var reset = function () {
            time = 30;
            $(".rightAns").empty();
            $(".rightAns").remove();
            $("#image").empty();
            $("#time-remaining").append(timerDiv);
            $(".countdown h3").html("Time Remaining: " + time);
            $("#question-block").append(questionDiv);
            $("#question-block").append(answerDiv);
        }
        reset();

        //function to show questions
        function showQuestion() {
            $(".question h1").html(questions[key].question);

            for (var i = 0; i < questions[key].answers.length; i++) {
                $(".answers").append("<button class='answer btn btn-danger btn-lg m-1'>" + questions[key].answers[i] + "</button>");
            }

            $(".answers button").on("click", function () {
                var selected = $(this).text();
                //if then to check question correctness
                if (selected === questions[key].correct) {
                    clearInterval(counter);
                    $("#success")[0].play();
                    $(timerDiv).remove();
                    $(questionDiv).remove();
                    $(".answers button").remove();
                    $(answerDiv).remove();
                    $("#correct-answer").append(rightDiv);
                    $(".rightAns").text("That's Correct!!");
                    $("#image").append(movieImg);
                    $(".img").html("<img src = 'assets/images/" + imgArray[currentQuestion] + ".jpg' class='mx-auto' width = '400px'>");
                    win++;
                    currentQuestion++;
                } else {
                    clearInterval(counter);
                    $('#fail')[0].play();
                    $(timerDiv).remove();
                    $(questionDiv).remove();
                    $(".answers button").remove();
                    $(answerDiv).remove();
                    $("#correct-answer").append(rightDiv);
                    $(".rightAns").text("Nope! The correct answer was: " + questions[key].correct);
                    $("#image").append(movieImg);
                    $(".img").html("<img src = 'assets/images/" + imgArray[currentQuestion] +  ".jpg' class='mx-auto' width = '400px'>");
                    lose++;
                    currentQuestion++;
                }
                n++;
                key = keys[n];

                //checking to see if there are more questions left
                if (checkForLast()) {
                    setTimeout(finalScore, 5 * 1000);
                } else {
                    setTimeout(countReset, 3 * 1000);
                    setTimeout(reset, 3 * 1000);
                    setTimeout(showQuestion, 3 * 1000);
                }
            });
        }

        showQuestion();
        backgroundMusic();
        var counter = setInterval(count, 1000);

        //show time remaining for each question
        function count() {
            time--;
            $(".countdown h3").html("Time Remaining: " + time);

            if (time < 1) {
                clearInterval(counter);
                $(timerDiv).remove();
                $(questionDiv).remove();
                $(".answers button").remove();
                $("#correct-answer").append(rightDiv);
                $(".rightAns").html("You took too long! The correct answer was: " + questions[key].correct);
                unanswered++;
                n++;
                key = keys[n];

                if (checkForLast()) {
                    setTimeout(finalScore, 5 * 1000);
                } else {
                    setTimeout(countReset, 3 * 1000);
                    setTimeout(reset, 3 * 1000);
                    setTimeout(showQuestion, 3 * 1000);
                }
            }
        }

        function checkForLast() {
            if (key === undefined) {
                return true;
            }
            return false;
        }

        //timer for the message after you choose your answer
        function countReset() {
            counter = setInterval(count, 1000);
        }

        //showthe final score screen
        function finalScore() {
            $(".rightAns").remove();
            $("#image").empty();
            $("#question-block").prepend("<h2>Unanswered: " + unanswered + "</h2>");
            $("#question-block").prepend("<h2>Incorrect: " + lose + "</h2>");
            $("#question-block").prepend("<h2>Correct: " + win + "</h2>");
            $("#start-button").show();
            $("#start-here").show();
        }
    };
    
    //function to start game on button click
    $(document).on("click", "#start-button", reset);
});