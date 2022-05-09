const daysEl = document.querySelector("#days")
const hoursEl = document.querySelector("#hours")
const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")

function countdown(){
    var inputDate = new Date(document.querySelector("#input-date").value)
    var currentDate = new Date()
    var rest = inputDate - currentDate

    var restDays = Math.floor(rest / (1000 * 60 * 60 * 24))
    var restHours = Math.floor((rest % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var restMinutes = Math.floor((rest % (1000 * 60 * 60)) / (1000 * 60))
    var restSeconds = Math.floor((rest % (1000 * 60)) / 1000)

    daysEl.textContent = restDays
    hoursEl.textContent = restHours
    minutesEl.textContent = restMinutes
    secondsEl.textContent = restSeconds

    setInterval(countdown, 1000)
}