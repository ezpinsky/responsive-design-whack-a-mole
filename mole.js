// window.addEventListener("DOMContentLoaded", () => {
//     setInterval(() => {
//         const moleHeads = document.querySelectorAll(".wgs__mole-head");
//         for (let moleHead of moleHeads) {
//             moleHead.classList.toggle("wgs__mole-head--hidden");
//         }
//     }, 1000);
// });

const popUpRandomMole = () => {
    let moleHeads = document.querySelectorAll(".wgs__mole-head");
    let rand = Math.floor(Math.random() * moleHeads.length);
    let mole = moleHeads[rand];
    mole.classList.remove("wgs__mole-head--hidden");
    // console.log(mole);
    setTimeout(hideMole, 1000, mole);
};

const hideMole = function (mole) {
    mole.classList.add("wgs__mole-head--hidden");
    setTimeout(popUpRandomMole, 1000);
};

window.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(popUpRandomMole, 0);
});


