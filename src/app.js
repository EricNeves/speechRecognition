const $button   = document.querySelector('#play')
const ball      = document.querySelector('.box__recorder img')
const boxResult = document.querySelector('.box__recorder p')

const startBallAnimantion = () => {
    ball.classList.add('active')
}

const stopBallAnimantion = () => {
    ball.classList.remove('active')
}

function handlerClick(e) {
    e.preventDefault()

    startBallAnimantion()

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = SpeechRecognition !== undefined ? new SpeechRecognition() : null

    if (!recognition) {
        boxResult.innerHTML = 'Sorry, something is wrong :('
    }

    recognition.lang = 'pt-br'
    recognition.start()

    recognition.onresult = (e) => {
        const resultText = e.results[0][0].transcript

        boxResult.innerHTML = resultText
        stopBallAnimantion()
    }
}

$button.addEventListener('click', handlerClick)