window.onload = function () {
    show(0);
    start();
}

var questions = [{
    id: 1,
    question: "Who is the founder of Pakistan?",
    answer: "Muhammad Ali Jinnah",
    options: [
        "Liaquat Ali Khan",
        "Muhammad Ali Jinnah",
        "Allama Iqbal",
        "Chaudhary Rehmat Ali"
    ]


},
{
    id: 2,
    question: "When was Pakistan come into being?",
    answer: "14th August 1947",
    options: [
        "3rd June 1945",
        "14th August 1947",
        "6th September 1965",
        "16th December 1971"
    ]

},
{
    id: 3,
    question: "What are the colours of flag?",
    answer: "Green and White",
    options: [
        "Blue and White",
        "Yellow and White",
        "Green and White",
        "Red and White"
    ]

},
{
    id: 4,
    question: "Which one of the following wrote the lyrics of Pakistan National Anthem?",
    answer: "Hafeez Jaalindhri",
    options: [
        "Ahmad G. Chagla",
        "Allama Iqbal",
        "Hafeez Jaalindhri",
        "Josh Maliabadi"
    ]

},
{
    id: 5,
    question: "The Pakistan Movement was led by which political Party?",
    answer: "All-india Muslim League",
    options: [
        "All-india Muslim League",
        "Pakistan Muslim League",
        "All-india Peoples Party",
        "Pakistan Peoples Party"
    ]

},
{
    id: 6,
    question: "The Pakistan Independence Movement was led under the leadership of:",
    answer: "Muhammad Ali Jinnah",
    options: [
        "Mahatma Gandhi",
        "Muhammad Ali Jinnah",
        "Fatima Jinnah",
        "Muhammad Iqbal"
    ]

},
{
    id: 7,
    question: "The Independence Day of Pakistan is celebrated:",
    answer: "Annually",
    options: [
        "Annually",
        "Monthly",
        "Quarterly",
        "Once every two years"
    ]

},
{
    id: 8,
    question: "Which one of these is also known as the Father of the Nation:",
    answer: "Muhammad Ali Jinnah",
    options: [
        "Maulana Shaukat Ali",
        "Muhammad Iqbal",
        "Muhammad Ali Jinnah",
        "Muhammad Ali Jouhor"
    ]

},
{
    id: 9,
    question: "National Flower of Pakistan is:",
    answer: "Jasmine",
    options: [
        "Rose",
        "Tulip",
        "Lotus",
        "Jasmine"
    ]

},
{
    id: 10,
    question: "What is the Official Language of Pakistan?",
    answer: "Urdu",
    options: [
        "English",
        "Urdu",
        "Turkish",
        "Sindhi"
    ]

}
]
// next question button
let question_count = 0;
var point = 0;
var c = 0;
function next() {
    let user_answer = document.querySelector('li.option.active').innerHTML;
    // user answer


    if (user_answer == questions[question_count].answer) {
        point += 10;
        c++;
        sessionStorage.setItem("Correct", c)
        var a = user_answer + " is " + "RIGHT";
        console.log(a)
        sessionStorage.setItem("points", point)
    } else {
        var a = user_answer + " is " + "wrong"
        console.log(a)
        point += 0

    }
    console

    if (question_count == questions.length - 1) {
        stop()
        location.href = "end.html"
        return;
    }


    question_count++;
    show(question_count)
}


function show(e) {
    var ques = document.getElementById('questions')
    ques.innerHTML = `
    <h2 class="text">Q ${question_count + 1 + " : "}${questions[e].question}</h2>
        <ul class="ul" >
            <li class="option" >${questions[e].options[0]}</li>
            <li class="option">${questions[e].options[1]}</li>
            <li class="option">${questions[e].options[2]}</li>
            <li class="option">${questions[e].options[3]}</li>
        </ul>
        `;

    toggleActive()


}

function toggleActive() {
    let option = document.querySelectorAll("li.option")
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active")
                }
            }
            option[i].classList.add('active')

        }

    }
}

// counter

var getCounter = document.getElementById("counter")
var ms = 100;
var s = 60;
var m = 9;
var interval;

function watch() {
    return (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s);
}



function timer() {
    getCounter.innerHTML = watch();
    --ms
    if (ms == 0) {
        --s;
        ms = 100;
    } else if (s == 0) {
        --m;
        s = 60
    }
}
function start() {
    interval = setInterval(timer, 10)
}
function stop() {
    clearTimeout(interval)
}


function submitForm(e){
    e.preventDefault();
    let name = document.forms["form"]["name"].value
    sessionStorage.setItem("Name",name)
    
}
function jump(){
    location.href = "mainpage.html"
}