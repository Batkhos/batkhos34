const quizData = [
    {
        Question : "how many golden ball did Ronaldo win?",
        a : 4,
        b : 5,
        c : 6,
        d : 7,
        correct : "b"
        },
        {
        Question : "how many golden ball did Messi win?",
        a : 4,
        b : 6,
        c : 7,
        d : 8,
        correct : "c"
        },
        {
            Question : "how many golden ball did bale win?",
            a : 4,
            b : 1,
            c : 6,
            d : "none",
            correct : "d"
            },
            {
            Question : "how many golden ball did benzema win?",
            a : 4,
            b : 6,
            c : 1,
            d : "none",
            correct : "c"
            }
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText= currentQuizData.Question;

    a_text.innerText= currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    })
}

submitBtn.addEventListener("click", () =>{
    // check to ee the answer
    const answer = getSelected();

        if(answer){
           if(answer === quizData[currentQuiz].
           correct){
                score++;
            }    
        }   

        currentQuiz++;
        if(currentQuiz < quizData.length){
          loadQuiz()
        }else{
          quiz.innerHTML= `<h2>You answered correctlyat
          ${score}/${quizData.length} questions.</h2><button 
          onclick="location.reload()">Reload</button>`;
        }    
})