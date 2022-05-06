const daysEl = document.querySelector("#days")
const hoursEl = document.querySelector("#hours")
const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")

const birthdayDate = "11 jan 2023" 

function countdown(){
    const futureDate = new Date(birthdayDate)
    const currentDate = new Date()

    const totalSeconds = (futureDate - currentDate) / 1000

    const restDays = Math.floor(totalSeconds / 3600 / 24)
    const restHours = Math.floor(totalSeconds / 3600) % 24
    const restMinutes = Math.floor(totalSeconds / 60) % 60
    const restSeconds = Math.floor(totalSeconds % 60)

    daysEl.textContent = restDays
    hoursEl.textContent = restHours
    minutesEl.textContent = restMinutes
    secondsEl.textContent = restSeconds

    setInterval(countdown, 1000)
}

countdown()