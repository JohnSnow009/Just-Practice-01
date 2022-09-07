let homeScoreEl = document.getElementById("homescore-el")
let guestScoreEl = document.getElementById("guestscore-el")

let score = 0

function plusHomeOne() {
    score += 1
    homeScoreEl.textContent = score
}

function plusHomeTwo() {
    score += 2
    homeScoreEl.textContent = score
}

function plusHomeThree() {
    score += 3
    homeScoreEl.textContent = score
}

function plusGuestOne() {
    score += 1
    guestScoreEl.textContent = score
}

function plusGuestTwo() {
    score += 2
    guestScoreEl.textContent = score
}

function plusGuestThree() {
    score += 3
    guestScoreEl.textContent = score
}