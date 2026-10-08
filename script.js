// ===============================
// SCHOOL REUNION 2026
// INTERACTION SCRIPT
// ===============================


// ELEMENTS

const interestedBtn = document.getElementById("interestedBtn");
const skipBtn = document.getElementById("skipBtn");

const interestModal = document.getElementById("interestModal");
const successModal = document.getElementById("successModal");
const skipModal = document.getElementById("skipModal");
const finalSkipModal = document.getElementById("finalSkipModal");

const closeInterest = document.getElementById("closeInterest");
const closeSkip = document.getElementById("closeSkip");

const interestForm = document.getElementById("interestForm");

const doneBtn = document.getElementById("doneBtn");
const thinkAgain = document.getElementById("thinkAgain");
const finalSkip = document.getElementById("finalSkip");
const exitBtn = document.getElementById("exitBtn");


// ===============================
// OPEN INTEREST POPUP
// ===============================

interestedBtn.addEventListener("click", () => {

    interestModal.classList.add("active");

    // Celebration
    createConfetti();

});


// ===============================
// CLOSE INTEREST POPUP
// ===============================

closeInterest.addEventListener("click", () => {

    interestModal.classList.remove("active");

});


// ===============================
// NOT INTERESTED
// ===============================

skipBtn.addEventListener("click", () => {

    skipModal.classList.add("active");

});


// ===============================
// CLOSE SKIP POPUP
// ===============================

closeSkip.addEventListener("click", () => {

    skipModal.classList.remove("active");

});


// ===============================
// THINK AGAIN
// ===============================

thinkAgain.addEventListener("click", () => {

    skipModal.classList.remove("active");

    interestModal.classList.add("active");

    createConfetti();

});


// ===============================
// FINAL SKIP
// ===============================

finalSkip.addEventListener("click", () => {

    skipModal.classList.remove("active");

    finalSkipModal.classList.add("active");

});


// ===============================
// EXIT
// ===============================

exitBtn.addEventListener("click", () => {

    finalSkipModal.classList.remove("active");

});


// ===============================
// FORM SUBMIT
// ===============================

interestForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const people = document.getElementById("people").value;


    // Basic validation

    if (name === "") {

        alert("Bro, naam toh batao 😄");

        return;

    }


    if (!/^[0-9]{10}$/.test(phone)) {

        alert("Please valid 10 digit WhatsApp number enter karo.");

        return;

    }


    if (people === "") {

        alert("Kitne log aa rahe ho, woh select karo.");

        return;

    }


    // Close form

    interestModal.classList.remove("active");


    // Show success

    setTimeout(() => {

        successModal.classList.add("active");

        createConfetti();

    }, 250);


    /*
        IMPORTANT:

        Abhi data sirf browser mein collect ho raha hai.

        Real data save karne ke liye backend / database
        connect karna hoga.

        Example:

        name
        phone
        people
        paymentStatus
        interestStatus

        Ye data public page par kabhi display nahi karna hai.
    */

    console.log({
        name: name,
        whatsapp: phone,
        people: people,
        interestStatus: "Interested",
        paymentStatus: "Pending"
    });

});


// ===============================
// DONE BUTTON
// ===============================

doneBtn.addEventListener("click", () => {

    successModal.classList.remove("active");

});


// ===============================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ===============================

document.querySelectorAll(".modal").forEach((modal) => {

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            modal.classList.remove("active");

        }

    });

});


// ===============================
// CONFETTI
// ===============================

function createConfetti() {

    const container = document.getElementById("confetti-container");

    const symbols = [
        "✨",
        "🎉",
        "❤️",
        "🥂",
        "🎊"
    ];


    for (let i = 0; i < 45; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.fontSize =
            (Math.random() * 10 + 10) + "px";


        confetti.style.animationDuration =
            (Math.random() * 1.5 + 2) + "s";


        confetti.style.animationDelay =
            Math.random() * 0.5 + "s";


        container.appendChild(confetti);


        setTimeout(() => {

            confetti.remove();

        }, 4000);

    }

}// =========================================
// WHY THIS REUNION
// =========================================

const whyBtn = document.getElementById("whyBtn");
const whyModal = document.getElementById("whyModal");

const closeWhy = document.getElementById("closeWhy");
const closeStory = document.getElementById("closeStory");


/* OPEN STORY */

whyBtn.addEventListener("click", () => {

    whyModal.classList.add("active");

});


/* CLOSE STORY */

closeWhy.addEventListener("click", () => {

    whyModal.classList.remove("active");

});


closeStory.addEventListener("click", () => {

    whyModal.classList.remove("active");

});


/* CLICK OUTSIDE TO CLOSE */

whyModal.addEventListener("click", (event) => {

    if (event.target === whyModal) {

        whyModal.classList.remove("active");

    }

});