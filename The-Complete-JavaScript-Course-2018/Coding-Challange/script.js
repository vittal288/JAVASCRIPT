// to make it private to out side world 
// (function () {
//     var questions = [
//         {
//             question: 'What is the Indian National Animal ?',
//             answers: [
//                 {
//                     0: 'Tiger'
//                 },
//                 {
//                     1: 'Camel'
//                 },
//                 {
//                     2: 'Elephant'
//                 }
//             ],
//             correctAnswer: 0
//         },
//         {
//             question: 'What is the Indian National Bird ?',
//             answers: [
//                 {
//                     0: 'Parrot'
//                 },
//                 {
//                     1: 'Peacock '
//                 },
//                 {
//                     2: 'Kingfisher'
//                 }
//             ],
//             correctAnswer: 1
//         },
//         {
//             question: 'What is the Indian National Game ?',
//             answers: [
//                 {
//                     0: 'Ko-Ko'
//                 },
//                 {
//                     1: 'Cricket'
//                 },
//                 {
//                     2: 'Hockey'
//                 }
//             ],
//             correctAnswer: 2
//         }
//     ];

//     var randomNo = Math.floor(Math.random() * questions.length);
//     questions[randomNo].answers.forEach((item, index) => {
//         console.log(index + ' - ' + item[index]);
//     });
//     var givenAnswer = prompt("Please type the correct answer");
//     questions[randomNo].answers.forEach((item, index) => {
//         if (givenAnswer == questions[randomNo].correctAnswer) {
//             console.log('Correct Answer');
//         } else {
//             console.log('Please try other options')
//         }
//     });
// })();





// OTHER SOLUTION USING FUNCTION CONSTRUCTOR 
(function () {
    function Questions(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    // using prototype while creating methods, it saves the memory because it will not create a copy of the same every time constructor function get instantiated 
    Questions.prototype.displayQuestion = function () {
        console.log(this.question);

        this.answers.forEach((item, index) => {
            console.log(index + ' ' + item);
        });

    };
    
    Questions.prototype.validateAnswer = function (ans,callback) {
        var sc;
        if (ans === this.correct) {
            console.log('Correct Answer')
            sc= callback(true);
        } else {
            console.log('Wrong Answer, Please try again !!!')
            sc = callback(false);
        }
        this.displayScore(sc);
    };

    Questions.prototype.displayScore = function(score){
        console.log('Your Current Score Is : ' + score);
        console.log('----------------------------------')
    }
    // new operator creates an empty object 
    // then Questions() method will invoke 
    // then this object will point the empty object which is created using new operator 
    var q1 = new Questions('Is Javascript is coolest language in the world ?', ['YES', 'NO'], 0);

    var q2 = new Questions('What is the Name of Capital of India?', ['Bangalore', 'Delhi'], 1);

    var q3 = new Questions('What is the Indian national animal ?', ['Tiger', 'Monkey'], 0);


    var questions = [q1, q2, q3];

    function score(){
        var sc =0;
        return function(correct){
            if(correct){
                sc++
            }
            return sc;
        }
    }

    // due to closure concept, we have access to variable sc in this line of code 
    var keepScore = score();
    function nextQuestion() {
        // generate random numbers 
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please select correct Option');
        
        if(answer !== 'exit'){
            questions[n].validateAnswer(parseInt(answer),keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
})();


