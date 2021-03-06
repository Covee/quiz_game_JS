/*  CODING CHALLENGE    --- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
    a) question itself
    b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
    c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.  */


function RP() {
    function Questions(question, choices, correct) {
        this.question = question;
        this.choices = choices;
        this.correct = correct;
    }

    var Q1 = new Questions(
        "is cobee looking good?",
        ["yep", "never"],
        0
    );
    var Q2 = new Questions(
        "is react good enough as library?",
        ["yes", "no", "it depends"],
        2
    );
    var Q3 = new Questions(
        "the most fuckest thing in korea?",
        ["price", "Housing", "President SalerMoon", "whole world"],
        3
    );

    Questions.prototype.pickerQ = function() {      // display a random question on console
        console.log(this.question);

        for (var i = 0; i < this.choices.length; i++) {
            console.log("(" + i + ") " + this.choices[i]);    
        }
    }

    var currentStatus = 0;

    Questions.prototype.correction = function (answer) {    // check if it is correct answer + add score
        var currentScore = currentStatus;
        if (answer == this.correct) {
            console.log("you got right answer!");
            currentScore++;
        } else {
            console.log("fuckin idiot. ");
        }

        this.displayScore(currentScore);
        currentStatus = currentScore;
    }

    Questions.prototype.displayScore = function (currentStatus) {   // display current score I got
        console.log('your score: ' + currentStatus);
        console.log('-----------------------');
    }
    
    var questions = [Q1, Q2, Q3];

    function nextQuestion() {       // step 8,9. using recursive function including exit condition.
        var pick_q = Math.floor(Math.random()*questions.length);
        questions[pick_q].pickerQ();
        var answer = prompt("what is the right answer?");

        if (answer !== 'exit') {
            questions[pick_q].correction(parseInt(answer));
            nextQuestion();
        }
    };

    nextQuestion();

};
RP();


