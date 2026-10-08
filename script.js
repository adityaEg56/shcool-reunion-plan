// =============================================
// SCHOOL UNION 2026
// COMPLETE WEBSITE SCRIPT
// =============================================


// =============================================
// GET ELEMENTS
// =============================================

const interestedBtn =
    document.getElementById("interestedBtn");

const skipBtn =
    document.getElementById("skipBtn");

const interestModal =
    document.getElementById("interestModal");

const successModal =
    document.getElementById("successModal");

const skipModal =
    document.getElementById("skipModal");

const finalSkipModal =
    document.getElementById("finalSkipModal");

const whyModal =
    document.getElementById("whyModal");


// =============================================
// CLOSE BUTTONS
// =============================================

const closeInterest =
    document.getElementById("closeInterest");

const closeSkip =
    document.getElementById("closeSkip");

const closeWhy =
    document.getElementById("closeWhy");

const closeStory =
    document.getElementById("closeStory");

const doneBtn =
    document.getElementById("doneBtn");

const thinkAgain =
    document.getElementById("thinkAgain");

const finalSkip =
    document.getElementById("finalSkip");

const exitBtn =
    document.getElementById("exitBtn");


// =============================================
// WHY REUNION
// =============================================

const whyBtn =
    document.getElementById("whyBtn");


whyBtn.addEventListener("click", () => {

    whyModal.classList.add("active");

});


closeWhy.addEventListener("click", () => {

    whyModal.classList.remove("active");

});


closeStory.addEventListener("click", () => {

    whyModal.classList.remove("active");

});


// =============================================
// INTERESTED
// =============================================

interestedBtn.addEventListener("click", () => {

    interestModal.classList.add("active");

    createConfetti();

});


// =============================================
// CLOSE INTEREST
// =============================================

closeInterest.addEventListener("click", () => {

    interestModal.classList.remove("active");

});


// =============================================
// NOT INTERESTED
// =============================================

skipBtn.addEventListener("click", () => {

    skipModal.classList.add("active");

});


// =============================================
// CLOSE SKIP
// =============================================

closeSkip.addEventListener("click", () => {

    skipModal.classList.remove("active");

});


// =============================================
// THINK AGAIN
// =============================================

thinkAgain.addEventListener("click", () => {

    skipModal.classList.remove("active");

    interestModal.classList.add("active");

    createConfetti();

});


// =============================================
// FINAL SKIP
// =============================================

finalSkip.addEventListener("click", () => {

    skipModal.classList.remove("active");

    finalSkipModal.classList.add("active");

});


// =============================================
// EXIT
// =============================================

exitBtn.addEventListener("click", () => {

    finalSkipModal.classList.remove("active");

});


// =============================================
// FORM
// =============================================

const interestForm =
    document.getElementById("interestForm");


interestForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const phone =
            document
                .getElementById("phone")
                .value
                .trim();


        const people =
            document
                .getElementById("people")
                .value;


        // NAME CHECK

        if (name === "") {

            alert(
                "Bro, naam toh batao 😄"
            );

            return;
        }


        // PHONE CHECK

        if (!/^[0-9]{10}$/.test(phone)) {

            alert(
                "Please valid 10 digit WhatsApp number enter karo."
            );

            return;
        }


        // PEOPLE CHECK

        if (people === "") {

            alert(
                "Kitne log aa rahe ho, woh select karo."
            );

            return;
        }


        // CLOSE FORM

        interestModal.classList.remove(
            "active"
        );


        // SUCCESS POPUP

        setTimeout(() => {

            successModal.classList.add(
                "active"
            );

            createConfetti();

        }, 250);


        // =====================================
        // TEMPORARY DATA
        // =====================================
        //
        // Abhi backend/database connected nahi hai.
        //
        // Isliye data console mein show hoga.
        //
        // Later:
        // Firebase / Supabase / backend
        // se connect kar sakte hain.
        //
        // =====================================

        console.log({

            name: name,

            whatsapp: phone,

            people: people,

            interestStatus:
                "Interested",

            paymentStatus:
                "Pending"

        });

    }
);


// =============================================
// SUCCESS DONE
// =============================================

doneBtn.addEventListener("click", () => {

    successModal.classList.remove(
        "active"
    );

});


// =============================================
// CLICK OUTSIDE MODAL
// =============================================

document
    .querySelectorAll(".modal")
    .forEach((modal) => {

        modal.addEventListener(
            "click",
            (event) => {

                if (
                    event.target === modal
                ) {

                    modal.classList.remove(
                        "active"
                    );

                }

            }
        );

    });


// =============================================
// ESC KEY
// =============================================

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            document
                .querySelectorAll(".modal")
                .forEach((modal) => {

                    modal.classList.remove(
                        "active"
                    );

                });

        }

    }
);


// =============================================
// CONFETTI
// =============================================

function createConfetti() {

    const container =
        document.getElementById(
            "confetti-container"
        );


    const symbols = [

        "✨",
        "🎉",
        "❤️",
        "🥂",
        "🎊"

    ];


    for (
        let i = 0;
        i < 45;
        i++
    ) {


        const confetti =
            document.createElement(
                "div"
            );


        confetti.classList.add(
            "confetti"
        );


        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random()
                    * symbols.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.fontSize =
            (
                Math.random() * 10
                + 10
            ) + "px";


        confetti.style.animationDuration =
            (
                Math.random() * 1.5
                + 2
            ) + "s";


        confetti.style.animationDelay =
            (
                Math.random() * 0.5
            ) + "s";


        container.appendChild(
            confetti
        );


        setTimeout(() => {

            confetti.remove();

        }, 4000);

    }

}
// =============================================
// OPENING FIREWORKS CELEBRATION
// =============================================

window.addEventListener("load", () => {

    const opening =
        document.getElementById(
            "openingCelebration"
        );

    const canvas =
        document.getElementById(
            "fireworksCanvas"
        );

    const ctx =
        canvas.getContext("2d");


    let width;
    let height;

    let fireworks = [];
    let particles = [];


    function resizeCanvas() {

        width =
            canvas.width =
            window.innerWidth;

        height =
            canvas.height =
            window.innerHeight;

    }


    resizeCanvas();

    window.addEventListener(
        "resize",
        resizeCanvas
    );


    // =========================================
    // FIREWORK
    // =========================================

    class Firework {

        constructor(
            x,
            targetY
        ) {

            this.x = x;

            this.y = height;

            this.targetY = targetY;

            this.speed =
                8 + Math.random() * 3;

            this.exploded = false;

        }


        update() {

            this.y -= this.speed;


            if (
                this.y <=
                this.targetY
            ) {

                this.explode();

                return true;

            }

            return false;

        }


        explode() {

            const particleCount =
                55 + Math.floor(
                    Math.random() * 35
                );


            for (
                let i = 0;
                i < particleCount;
                i++
            ) {

                const angle =
                    (
                        Math.PI * 2
                    )
                    *
                    (
                        i /
                        particleCount
                    );


                const speed =
                    2 +
                    Math.random() * 5;


                particles.push(

                    new Particle(
                        this.x,
                        this.y,
                        angle,
                        speed
                    )

                );

            }

        }


        draw() {

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                2,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "#f1d99a";

            ctx.fill();

        }

    }


    // =========================================
    // PARTICLES
    // =========================================

    class Particle {

        constructor(
            x,
            y,
            angle,
            speed
        ) {

            this.x = x;

            this.y = y;

            this.vx =
                Math.cos(angle)
                * speed;

            this.vy =
                Math.sin(angle)
                * speed;

            this.life = 1;

            this.decay =
                0.012 +
                Math.random() * 0.018;

            this.size =
                1 +
                Math.random() * 2;

        }


        update() {

            this.x += this.vx;

            this.y += this.vy;

            this.vy += 0.035;

            this.vx *= 0.985;

            this.vy *= 0.985;

            this.life -=
                this.decay;


            return this.life > 0;

        }


        draw() {

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.size,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
                `rgba(
                    241,
                    217,
                    154,
                    ${this.life}
                )`;


            ctx.shadowBlur = 12;

            ctx.shadowColor =
                "#f1d99a";

            ctx.fill();

            ctx.shadowBlur = 0;

        }

    }


    // =========================================
    // CREATE FIREWORK
    // =========================================

    function launchFirework() {

        const x =
            width *
            (
                0.15 +
                Math.random() * 0.7
            );


        const targetY =
            height *
            (
                0.15 +
                Math.random() * 0.35
            );


        fireworks.push(
            new Firework(
                x,
                targetY
            )
        );

    }


    // =========================================
    // ANIMATION
    // =========================================

    function animate() {

        ctx.fillStyle =
            "rgba(2,2,2,0.18)";

        ctx.fillRect(
            0,
            0,
            width,
            height
        );


        fireworks =
            fireworks.filter(
                (firework) => {

                    const done =
                        firework.update();

                    if (!done) {

                        firework.draw();

                    }

                    return !done;

                }
            );


        particles =
            particles.filter(
                (particle) => {

                    const alive =
                        particle.update();

                    if (alive) {

                        particle.draw();

                    }

                    return alive;

                }
            );


        requestAnimationFrame(
            animate
        );

    }


    animate();


    // =========================================
    // GRAND OPENING FIREWORKS
    // =========================================

    launchFirework();

    setTimeout(
        launchFirework,
        350
    );

    setTimeout(
        launchFirework,
        700
    );

    setTimeout(
        launchFirework,
        1100
    );

    setTimeout(
        launchFirework,
        1500
    );

    setTimeout(
        launchFirework,
        1900
    );


    // =========================================
    // CLOSE OPENING
    // =========================================

    setTimeout(() => {

        opening.classList.add(
            "hide"
        );

    }, 4200);


    // Remove from screen after animation

    setTimeout(() => {

        opening.remove();

    }, 5600);

});