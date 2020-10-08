// window.addEventListener("DOMContentLoaded", () => {
//     setInterval(() => {
//         const moleHeads = document.querySelectorAll(".wgs__mole-head");
//         for (let moleHead of moleHeads) {
//             moleHead.classList.toggle("wgs__mole-head--hidden");
//         }
//     }, 1000);
// });

const popUpRandomMole = () => {
    let moleHeads = document.querySelectorAll(
        ".wgs__mole-head:not(.wgs__mole-head--whacked)",
    );
    if (!moleHeads.length) {
        alert("YOU WON!!");
        return;
    }
    let rand = Math.floor(Math.random() * moleHeads.length);
    let mole = moleHeads[rand];
    mole.classList.remove("wgs__mole-head--hidden");
    setTimeout(hideMole, 500, mole);
};

const hideMole = function (mole) {
    mole.classList.add("wgs__mole-head--hidden");
    setTimeout(popUpRandomMole, 1000);
};

window.addEventListener("DOMContentLoaded", e => {
    setTimeout(popUpRandomMole, 0);
    const moleHeads = document.querySelectorAll(".wgs__mole-head");
    // for (let mole in moleHeads) {
    //     console.log(mole);
    //     mole.addEventListener("click", e => {
    //         e.target.classList.add("wgs__mole-head--hidden");
    //     });
    // }

    moleHeads.forEach(mole => {
        mole.addEventListener("click", e => {
            e.target.classList.add(
                "wgs__mole-head--hidden",
                "wgs__mole-head--whacked",
            );
        });
    });
});
