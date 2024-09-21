// const questions = [
//     {
//       question: "What is the correct syntax for referring to an external script called 'app.js'?",
//       options: [
//         "<script href='app.js'></script>",
//         "<script src='app.js'></script>",
//         "<script ref='app.js'></script>",
//         "<script link='app.js'></script>"
//       ],
//       correctAnswer: 1
//     },
//     {
//       question: "Which company developed JavaScript?",
//       options: [
//         "Microsoft",
//         "Apple",
//         "Netscape",
//         "IBM"
//       ],
//       correctAnswer: 2
//     },
//     {
//       question: "How do you declare a JavaScript variable?",
//       options: [
//         "var myVar;",
//         "variable myVar;",
//         "v myVar;",
//         "declare myVar;"
//       ],
//       correctAnswer: 0
//     },
//     {
//       question: "Which of the following is not a JavaScript data type?",
//       options: [
//         "String",
//         "Number",
//         "Boolean",
//         "Float"
//       ],
//       correctAnswer: 3
//     },
//     {
//       question: "How do you create a function in JavaScript?",
//       options: [
//         "function = myFunction()",
//         "function myFunction()",
//         "create myFunction()",
//         "def myFunction()"
//       ],
//       correctAnswer: 1
//     },
//     {
//       question: "Which symbol is used for comments in JavaScript?",
//       options: [
//         "// for single-line and /* */ for multi-line",
//         "/* for single-line and // for multi-line",
//         "<!-- --> for comments",
//         "None of the above"
//       ],
//       correctAnswer: 0
//     },
//     {
//       question: "Which built-in method removes the last element from an array and returns that element?",
//       options: [
//         "last()",
//         "get()",
//         "pop()",
//         "remove()"
//       ],
//       correctAnswer: 2
//     },
//     {
//       question: "Which event occurs when the user clicks on an HTML element?",
//       options: [
//         "onchange",
//         "onmouseclick",
//         "onmouseover",
//         "onclick"
//       ],
//       correctAnswer: 3
//     },
//     {
//       question: "Which method converts JSON data into a JavaScript object?",
//       options: [
//         "JSON.stringify()",
//         "JSON.parse()",
//         "JSON.objectify()",
//         "JSON.convert()"
//       ],
//       correctAnswer: 1
//     },
//     {
//       question: "Which JavaScript keyword is used to define a constant?",
//       options: [
//         "var",
//         "let",
//         "const",
//         "constant"
//       ],
//       correctAnswer: 2
//     }
//   ];

// const question = document.getElementById("quiz-question");
// const option_a = document.getElementById("text_option_a");
// const option_b = document.getElementById("text_option_b");
// const option_c = document.getElementById("text_option_c");
// const option_d = document.getElementById("text_option_d");

// const answerElement = document.querySelectorAll(".answer");

// const submit = document.getElementById("submit");   

// let currentQuestion = 0;
// let score = 0;

const quiz = [

    {
        question: "Q1. What is the correct syntax for referring to an external script called 'app.js'?",
        ans1text: "<script href='app.js'></script>",
        ans2text: "<script src='app.js'></script>",
        ans3text: "<script ref='app.js'></script>",
        ans4text: "<script link='app.js'></script>",
        answer: "<script src='app.js'></script>",
    },
    {
        question: "Which company developed JavaScript?",

        ans1text: "Microsoft",
        ans2text: "Apple",
        ans3text: "Netscape",
        ans4text: "IBM",
        answer: "Netscape",
    },
    {
        question: "How do you declare a JavaScript variable?",

        ans1text: "var myVar;",
        ans2text: "variable myVar;",
        ans3text: "v myVar;",
        ans4text: "declare myVar;",
        answer: "var myVar;",
    },
    {
        question: "Which of the following is not a JavaScript data type?",

        ans1text: "String",
        ans2text: "Number",
        ans3text: "Boolean",
        ans4text: "Float",
        answer: "Float",
    },
    {
        question: "How do you create a function in JavaScript?",

        ans1text: "function = myFunction()",
        ans2text: "function myFunction()",
        ans3text: "create myFunction()",
        ans4text: "def myFunction()",
        answer: "function myFunction()",
    },
    {
        question: "Which symbol is used for comments in JavaScript?",

        ans1text: "// for single-line and /* */ for multi-line",
        ans2text: "/* for single-line and // for multi-line",
        ans3text: "<!-- --> for comments",
        ans4text: "None of the above",
        answer: "// for single-line and /* */ for multi-line",
    },
    {
        question: "Which built-in method removes the last element from an array and returns that element?",

        ans1text: "last()",
        ans2text: "get()",
        ans3text: "pop()",
        ans4text: "remove()",
        answer: "pop()",
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        ans1text: "onchange",
        ans2text: "onmouseclick",
        ans3text: "onmouseover",
        ans4text: "onclick",
        answer: "onclick",
    },
    {
        question: "Which method converts JSON data into a JavaScript object?",
        ans1text: "JSON.stringify()",
        ans2text: "JSON.parse()",
        ans3text: "JSON.objectify()",
        ans4text: "JSON.convert()",
        answer: "JSON.parse()",
    },
    {
        question: "Which JavaScript keyword is used to define a constant?",
        ans1text: "var",
        ans2text: "let",
        ans3text: "const",
        ans4text: "constant",
        answer: "const",
    },

    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "Python",
    },
    {
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "Which method is used to remove the first element of an array?",
        ans1text: "shift()",
        ans2text: "pop()",
        ans3text: "unshift()",
        ans4text: "removeFirst()",
        answer: "shift()",
    },
    {
        question: "Which of the following is used to define a block of statements to be executed together?",
        ans1text: "Parentheses ()",
        ans2text: "Square brackets []",
        ans3text: "Curly braces {}",
        ans4text: "Angle brackets <>",
        answer: "Curly braces {}",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if (checkedAns === null) {
        alert("Please select an answer");
    } else {
        if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quiz.length) {
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        } else {
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});