const fulBtn = document.querySelector('.fullsceen-btn')
const WinApp = document.querySelector('.window')

fulBtn.addEventListener('click' , ()=>{
    WinApp.classList.toggle('full')
})


let Answer = document.querySelector('.answer')
let Equation = document.querySelector('.equation')

Answer.status = 0

const AnswerSt = ()=>{
    if (Answer.status == 0) {
        Answer.status = 1
        Answer.textContent = ''
        Equation.textContent = ''
    } else {
        return
    }
}
function AppstateChange(){
    if (value1 != undefined) {
        Appstate = 2
    } else {
        Appstate = 1
    }
}

function AnswerAn(){
    Answer.classList.add('animation')
    setTimeout(() => {
        Answer.classList.remove('animation')
    }, 100);
}


const getBtn = document.querySelectorAll('.numbers-button')

const returnBtn = document.getElementById('returnbtn')
const backBtn = document.getElementById('backbtn')


getBtn.forEach(btn => {
    btn.addEventListener('click' , ()=>{
        console.log('click')
        if (btn.parentElement.classList[0] == 'numbers2'){
            AnswerSt()
            Answer.textContent += btn.textContent
            Equation.textContent += btn.textContent
            AnswerAn()
            AppstateChange()
        }
        if (btn.parentElement.classList[0] == 'numbers3'){
            Equation.textContent += btn.textContent
            calcApp(Answer.textContent , btn.textContent , value1 , value2)
        }
        if (btn.parentElement.classList[0] == 'numbers'){
            calcApp(Answer.textContent , btn.textContent , value1 , value2)
            AnswerAn()
        }
    })
});


let value1 = undefined
let value2 = undefined
let doThis = undefined
let Appstate = 1

returnBtn.addEventListener('click' , ()=>{
    returnAnswer()
})
function returnAnswer(){
    console.log('return:' + Answer.textContent)
    Answer.status = 0
    Answer.textContent = '0'
    Equation.textContent = ''
}
backBtn.addEventListener('click' , ()=>{
    backAnswer()
})

function backAnswer(){
    console.log('back:' + Answer.textContent)
    if (Answer.textContent.length == 0){
        Answer.textContent = 0
    } else {
            if (value1 == undefined) {
                Answer.textContent = Answer.textContent.slice(0 , -1)
                Equation.textContent = Equation.textContent.slice(0 , -1)
                if(Answer.textContent.length == 0){
                    Answer.textContent = 0
                }
            }
            if (Appstate == 2) {
                Answer.textContent = Answer.textContent.slice(0 , -1)
                Equation.textContent = Equation.textContent.slice(0 , -1)
                if(Answer.textContent.length == 0){
                    Answer.textContent = 0
                    Appstate = 1
                }
            }
    }
}

function calcApp(item , item2){

    Answer.status = 0

    if (item2 == '='){
        if (doThis != undefined) {
            calcApp(Answer.textContent , doThis , value1 , value2)
            doThis = undefined
            AnswerAn()
        } else {
            AnswerAn()
            Equation.textContent = Answer.textContent
        }
    }
    if (item2 == '+') {
        if (value1 == undefined) {
            value1 = Number(item)
            doThis = item2
        } else{
            value2 = Number(item)
            Answer.textContent = value1 + value2
            Equation.textContent = Answer.textContent
            value1 = undefined
            value2 = undefined
            AnswerAn()
        }
    }
    if (item2 == '-') {
        if (value1 == undefined) {
            value1 = Number(item)
            doThis = item2
        } else {
            value2 = Number(item)
            Answer.textContent = value1 - value2
            Equation.textContent = Answer.textContent
            value1 = undefined
            value2 = undefined
            AnswerAn()
        }
    }
    if (item2 == '÷') {
        if (value1 == undefined) {
            value1 = Number(item)
            doThis = item2
        } else {
            value2 = Number(item)
            if ((value1 / value2) == Infinity) {
                Answer.textContent = 'на ноль делить нельзя'
                Equation.textContent = 0
                AnswerAn()
            } else {
                Answer.textContent = value1 / value2
                Equation.textContent = Answer.textContent
            }
            value1 = undefined
            value2 = undefined
            AnswerAn()
        }
    }
    if (item2 == '×') {
        if (value1 == undefined) {
            value1 = Number(item)
            doThis = item2
        } else {
            value2 = Number(item)
            Answer.textContent = value1 * value2
            Equation.textContent = Answer.textContent
            value1 = undefined
            value2 = undefined
            AnswerAn()
        }
    }

    if (item2 == 'x²') {
        Answer.textContent = Number(item) * Number(item)
        Equation.textContent = Answer.textContent
        AnswerAn()
    }
    if (item2 == '√x') {
        Answer.textContent = Math.sqrt(Number(item))
        Equation.textContent = Answer.textContent
        AnswerAn()
    }
    if (item2 == 'cos') {
        Answer.textContent = Math.cos(Number(item))
        Equation.textContent = Answer.textContent
        AnswerAn()
    }
    if (item2 == 'sin') {
        Answer.textContent = Math.sin(Number(item))
        Equation.textContent = Answer.textContent
        AnswerAn()
     }

    // if(Appstate == 1) {
    //     Appstate = 2
    // } else {
    //     Appstate = 1
    // }
    console.log(Appstate)
}