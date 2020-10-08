// window.addEventListener("DOMContentLoaded", () => {
//     setInterval(() => {
//         const moleHeads = document.querySelectorAll(".wgs__mole-head");
//         for (let moleHead of moleHeads) {
//             moleHead.classList.toggle("wgs__mole-head--hidden");
//         }
//     }, 1000);
// });

const popUpRandomMole = () => {
    let moleHeads = document.querySelectorAll("wgs__dirt-pile");
    console.log(moleHeads);
    let rand = Math.floor(Math.random() * 7);
    let mole = moleHeads[rand];
    mole.classList.remove("wgs__mole-head--hidden");
    setTimeout(hideMole(mole), 1000);
};

const hideMole = function (mole) {
    mole.classList.add("wgs__mole-head--hidden");
    setTimeout(popUpRandomMole, 1000);
};

window.addEventListener("DOMContentLoaded", popUpRandomMole());
