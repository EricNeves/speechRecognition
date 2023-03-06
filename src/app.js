const $button   = document.querySelector('#play')
const ball      = document.querySelector('.box__recorder img')
const boxResult = document.querySelector('.box__recorder p')

const startBallAnimantion = () => {
    ball.classList.add('active')
}

const stopBallAnimantion = () => {
    ball.classList.remove('active')
}

function changeTheme() {
    document.querySelector('body').classList.add('light')
    document.querySelectorAll('header li a').forEach(item => {
        item.classList.add('dark')
    })
    boxResult.classList.add('dark')
    document.querySelector('.box__recorder h1').classList.add('dark')
    document.querySelector('.box__recorder p').classList.add('dark')
    document.querySelector('.box__recorder a').classList.add('dark')
    document.querySelector('header .brand i').classList.add('dark')
}

function handlerRecorder() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = SpeechRecognition !== undefined ? new SpeechRecognition() : null

    if (!recognition) {
        boxResult.innerHTML = 'Sorry, something is wrong :('
    }

    recognition.lang = 'pt-br'
    recognition.start()

    recognition.onresult = (e) => {
        const resultText = e.results[0][0].transcript

        if (resultText == 'hello world') {
            changeTheme()
        }

        boxResult.innerHTML = resultText
        stopBallAnimantion()
    }
}

function handlerClick(e) {
    e.preventDefault()
    startBallAnimantion()
    handlerRecorder()
}

$button.addEventListener('click', handlerClick)