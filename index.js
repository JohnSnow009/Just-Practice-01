let homeScoreEl = document.getElementById("homescore-el")
let guestScoreEl = document.getElementById("guestscore-el")

let scoreHome = 0
let scoreGuest = 0

function plusHomeOne() {
    scoreHome += 1
    homeScoreEl.textContent = scoreHome
}

function plusHomeTwo() {
    scoreHome += 2
    homeScoreEl.textContent = scoreHome
}

function plusHomeThree() {
    scoreHome += 3
    homeScoreEl.textContent = scoreHome
}

function plusGuestOne() {
    scoreGuest += 1
    guestScoreEl.textContent = scoreGuest
}

function plusGuestTwo() {
    scoreGuest += 2
    guestScoreEl.textContent = scoreGuest
}

function plusGuestThree() {
    scoreGuest += 3
    guestScoreEl.textContent = scoreGuest
}