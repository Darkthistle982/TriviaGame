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
            question: "What was the name of Dr. Frankenstein's assistant in the 1931 film, Frankenstein?",
            answers: ["Fritz", "Igor", "Johan", "Frederick"],
            correct: "Fritz"
        },
        five: {
            question: "In the 1984 horror classic, A Nightmare on Elm Street, we see one of the major film appearances by which actor?",
            answers: ["Kevin Bacon", "Keifer Sutherland", "Johnny Depp", "Tom Cruise"],
            correct: "Johnny Depp"
        },
        six: {
            question: "In the 2004 film, Saw, the killer used a puppet as his proxy to antagonize his victims. What was the name of the puppet?",
            answers: ["Billy", "Zeppo", "Jigsaw", "Howdy Doody"],
            correct: "Billy"
        },
        seven: {
            question: "What was the official credited name for the monster in the 1954 classic, the Creature from the Black Lagoon?",
            answers: ["Fish-man", "Gill-man", "Lagoon-beast", "Water-beast"],
            correct: "Gill-man"
        },
        eight: {
            question: "In the 1974 slasher film, Texas Chainsaw Massacre, what is the name of the saw weilding killer?",
            answers: ["The Hitchhiker", "Drayton Sawyer", "Leatherface", "Candyman"],
            correct: "Leatherface"
        },
        nine: {
            question: "In the 1968 classic, Night of the Living Dead, what is the name of the lead actress, famously taunted in a graveyard by her brother right before he meets his untimely end?",
            answers: ["Helen", "Karen", "Judy", "Barbara"],
            correct: "Barbara"
        },
        ten: {
            question: "In the 2008 horror anthology, Trick 'r Treat, the antagonist, Sam, punishes those who don't follow the rules of Halloween. Which one is NOT a rule of Halloween?",
            answers: ["Never prank a decorated home", "Always give candy to trick-or-treaters", "Respect the dead", "Always wear a costume"],
            correct: "Never prank a decorated home"
        },
        eleven: {
            question: "In the 1931 monster movie classic, Dracula, Bela Lugosi portrayed his most famous role of his lifetime. What was the name of the insect eating toady who does the vampires bidding?",
            answers: ["John", "Dr. Seward", "Matin", "Renfield"],
            correct: "Renfield"
        },
        twelve: {
            question: "In the 1999 remake of the Castle Films classic, House on Haunted Hill, the guests are being payed to stay in what haunted building instead of a house?",
            answers: ["Schoolhouse", "Mental Asylum", "Hospital", "Hotel"],
            correct: "Mental Asylum"
        },
        thirteen: {
            question: "Which of these revolutionary films is lauded as the first true horror film?",
            answers: ["Psycho", "Night of the Living Dead", "The Cabinet of Dr. Caligari", "The Hunchback of Notre Dame"],
            correct: "The Cabinet of Dr. Caligari"
        },
    };

    var win = 0;
    var lose = 0;
    var unanswered = 0;
    var time = 60;
    var intervalId;

    //function to reset game
    function reset() {
        win = 0;
        lose = 0;
        unanswered = 0;
        time = 60;
        $("#start-button").show();
        $("#start-here").show()
    }

    //function to start game on button click
    $("#start-button").on("click", function () {
        runTimer();
        checkAnswers();
        $("#start-button").hide("slow");
        $("#start-here").hide("slow");
        // displayQuestionOne()
        Object.keys(questions).forEach(function (key) {
            showQuestion(questions[key]);
        });

    });

    function runTimer(callback) {
        intervalId = setInterval(countdown, 1000);
    };

    function stop() {
        clearInterval(intervalId);
    }

    //show question one
    // function displayQuestionOne() {
    //     runTimer();
    //     $("#question").text(questions.one.question);

    //     for (i = 0; i < 4; i++) {
    //         $("#answers").append("<li>" + questions.one.answers[i]);
    //     };
    
    //      $("#answers").on("click", function () {
    //       var selected = $(this).text();
    //       console.log(selected);
    //      });
    // };


    //function to show questions
    function showQuestion(question) {
        var newQuestionDiv = $("<div class='display-4'>");
        $("#question-block").append(newQuestionDiv);
        $(newQuestionDiv).text(question.question);
        for (let i = 0; i < 4; i++) {
            $("#question-block").append("<li class='btn btn-danger btn-lg m-1'>" + question.answers[i] + "</li>");
        }
    }

    //function to run the question timer
    function countdown() {
            time--;
            $("#time-remaining").text("Time Remaining: " + time);
            if (time === 0) {
                console.log("Time up");
                unanswered++;
                stop();
            }
        }

    //function to check answer and add onclick to answers
    function checkAnswers() {
        $(".btn").on("click", function(){
            var selected = $(this).text();
            console.log(selected);
        })
    }












});