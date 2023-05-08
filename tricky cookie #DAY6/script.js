let BtnsBox = document.getElementById("buttons-box")
let NotMeBtn = document.getElementById("not-me")
let MeBtn = document.getElementById("me")
let Box = document.getElementById("box")


NotMeBtn.onclick = function() {
    BtnsBox.classList.toggle("reverse")
}

MeBtn.onclick = function() {
    Box.innerHTML = "Thank you!"
    Box.style.color = "#3498db"
}
