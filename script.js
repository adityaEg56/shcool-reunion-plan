// =====================================================
// SCHOOL REUNION 2026
// GOOGLE SHEET CONNECTED VERSION
// =====================================================


// =====================================================
// GOOGLE APPS SCRIPT URL
// =====================================================

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbySutxV8zivph4S-fek_7rIXPXBLN5SywjnLNu0G8pRgv1Xl0iwEdaA_MflMjluVm6G/exec";


// =====================================================
// OPENING FIREWORKS
// =====================================================

window.addEventListener("load", () => {

    const opening =
        document.getElementById("openingCelebration");

    const canvas =
        document.getElementById("fireworksCanvas");

    if (!opening || !canvas) return;

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


    // ---------------------------------------------
    // FIREWORK CLASS
    // ---------------------------------------------

    class Firework {

        constructor(x, targetY) {

            this.x = x;
            this.y = height;
            this.targetY = targetY;

            this.speed =
                8 + Math.random() * 3;
        }


        update() {

            this.y -= this.speed;

            if (this.y <= this.targetY) {

                this.explode();

                return true;

            }

            return false;
        }


        explode() {

            const count =
                55 +
                Math.floor(
                    Math.random() * 35
                );


            for (
                let i = 0;
                i < count;
                i++
            ) {

                const angle =
                    Math.PI *
                    2 *
                    (i / count);

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


    // ---------------------------------------------
    // PARTICLE CLASS
    // ---------------------------------------------

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
                Math.cos(angle) *
                speed;

            this.vy =
                Math.sin(angle) *
                speed;

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

            this.life -= this.decay;

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


    // ---------------------------------------------
    // LAUNCH FIREWORK
    // ---------------------------------------------

    function launchFirework() {

        const x =
            width *
            (
                0.12 +
                Math.random() * 0.76
            );


        const targetY =
            height *
            (
                0.12 +
                Math.random() * 0.38
            );


        fireworks.push(
            new Firework(
                x,
                targetY
            )
        );

    }


    // ---------------------------------------------
    // ANIMATION
    // ---------------------------------------------

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
                firework => {

                    const exploded =
                        firework.update();

                    if (!exploded) {
                        firework.draw();
                    }

                    return !exploded;

                }
            );


        particles =
            particles.filter(
                particle => {

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


    // ---------------------------------------------
    // GRAND OPENING
    // ---------------------------------------------

    launchFirework();

    setTimeout(
        launchFirework,
        300
    );

    setTimeout(
        launchFirework,
        650
    );

    setTimeout(
        launchFirework,
        1000
    );

    setTimeout(
        launchFirework,
        1350
    );

    setTimeout(
        launchFirework,
        1750
    );

    setTimeout(
        launchFirework,
        2150
    );


    // ---------------------------------------------
    // CLOSE OPENING
    // ---------------------------------------------

    setTimeout(() => {

        opening.classList.add(
            "hide"
        );

    }, 4200);


    setTimeout(() => {

        opening.remove();

    }, 5600);

});



// =====================================================
// ELEMENTS
// =====================================================

const interestedBtn =
    document.getElementById(
        "interestedBtn"
    );

const skipBtn =
    document.getElementById(
        "skipBtn"
    );

const interestModal =
    document.getElementById(
        "interestModal"
    );

const successModal =
    document.getElementById(
        "successModal"
    );

const skipModal =
    document.getElementById(
        "skipModal"
    );

const finalSkipModal =
    document.getElementById(
        "finalSkipModal"
    );

const whyModal =
    document.getElementById(
        "whyModal"
    );



// =====================================================
// BUTTONS
// =====================================================

const closeInterest =
    document.getElementById(
        "closeInterest"
    );

const closeSkip =
    document.getElementById(
        "closeSkip"
    );

const closeWhy =
    document.getElementById(
        "closeWhy"
    );

const closeStory =
    document.getElementById(
        "closeStory"
    );

const doneBtn =
    document.getElementById(
        "doneBtn"
    );

const thinkAgain =
    document.getElementById(
        "thinkAgain"
    );

const finalSkip =
    document.getElementById(
        "finalSkip"
    );

const exitBtn =
    document.getElementById(
        "exitBtn"
    );

const whyBtn =
    document.getElementById(
        "whyBtn"
    );



// =====================================================
// WHY REUNION
// =====================================================

if (whyBtn) {

    whyBtn.addEventListener(
        "click",
        () => {

            if (whyModal) {

                whyModal.classList.add(
                    "active"
                );

            }

        }
    );

}


if (closeWhy) {

    closeWhy.addEventListener(
        "click",
        () => {

            if (whyModal) {

                whyModal.classList.remove(
                    "active"
                );

            }

        }
    );

}


if (closeStory) {

    closeStory.addEventListener(
        "click",
        () => {

            if (whyModal) {

                whyModal.classList.remove(
                    "active"
                );

            }

        }
    );

}



// =====================================================
// INTERESTED
// =====================================================

if (interestedBtn) {

    interestedBtn.addEventListener(
        "click",
        () => {

            if (interestModal) {

                interestModal.classList.add(
                    "active"
                );

            }

            createConfetti();

        }
    );

}



// =====================================================
// CLOSE INTEREST
// =====================================================

if (closeInterest) {

    closeInterest.addEventListener(
        "click",
        () => {

            if (interestModal) {

                interestModal.classList.remove(
                    "active"
                );

            }

        }
    );

}



// =====================================================
// NOT INTERESTED
// =====================================================

if (skipBtn) {

    skipBtn.addEventListener(
        "click",
        () => {

            if (skipModal) {

                skipModal.classList.add(
                    "active"
                );

            }

        }
    );

}



// =====================================================
// CLOSE SKIP
// =====================================================

if (closeSkip) {

    closeSkip.addEventListener(
        "click",
        () => {

            if (skipModal) {

                skipModal.classList.remove(
                    "active"
                );

            }

        }
    );

}



// =====================================================
// THINK AGAIN
// =====================================================

if (thinkAgain) {

    thinkAgain.addEventListener(
        "click",
        () => {

            if (skipModal) {

                skipModal.classList.remove(
                    "active"
                );

            }

            if (interestModal) {

                interestModal.classList.add(
                    "active"
                );

            }

            createConfetti();

        }
    );

}



// =====================================================
// FINAL SKIP
// =====================================================

if (finalSkip) {

    finalSkip.addEventListener(
        "click",
        () => {

            if (skipModal) {

                skipModal.classList.remove(
                    "active"
                );

            }

            if (finalSkipModal) {

                finalSkipModal.classList.add(
                    "active"
                );

            }

        }
    );

}



// =====================================================
// EXIT
// =====================================================

if (exitBtn) {

    exitBtn.addEventListener(
        "click",
        () => {

            if (finalSkipModal) {

                finalSkipModal.classList.remove(
                    "active"
                );

            }

        }
    );

}



// =====================================================
// INTEREST FORM
// =====================================================

const interestForm =
    document.getElementById(
        "interestForm"
    );


if (interestForm) {

    interestForm.addEventListener(
        "submit",
        async function(event) {

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


            // -----------------------------------------
            // VALIDATION
            // -----------------------------------------

            if (!name) {

                alert(
                    "Bro, naam toh batao 😄"
                );

                return;

            }


            if (
                !/^[0-9]{10}$/.test(
                    phone
                )
            ) {

                alert(
                    "Please valid 10 digit WhatsApp number enter karo."
                );

                return;

            }


            if (!people) {

                alert(
                    "Kitne log aa rahe ho, woh select karo."
                );

                return;

            }


            // -----------------------------------------
            // DATA
            // -----------------------------------------

            const registrationData = {

                name: name,

                whatsapp: phone,

                people: people

            };


            // -----------------------------------------
            // SEND DATA TO GOOGLE SHEET
            // -----------------------------------------

            try {

                await fetch(
                    GOOGLE_SCRIPT_URL,
                    {

                        method: "POST",

                        mode: "no-cors",

                        headers: {

                            "Content-Type":
                                "text/plain;charset=utf-8"

                        },

                        body:
                            JSON.stringify(
                                registrationData
                            )

                    }
                );


                // CLOSE INTEREST FORM

                if (interestModal) {

                    interestModal.classList.remove(
                        "active"
                    );

                }


                // SHOW SUCCESS

                setTimeout(
                    () => {

                        if (successModal) {

                            successModal.classList.add(
                                "active"
                            );

                        }

                        createConfetti();

                    },
                    250
                );


                // CLEAR FORM

                interestForm.reset();


                console.log(
                    "School Reunion registration sent:",
                    registrationData
                );


            } catch (error) {

                console.error(
                    "Google Sheet Error:",
                    error
                );


                alert(
                    "Bro, data submit nahi ho paya. Internet check karke dobara try karo."
                );

            }

        }
    );

}



// =====================================================
// SUCCESS CLOSE
// =====================================================

if (doneBtn) {

    doneBtn.addEventListener(
        "click",
        () => {

            if (successModal) {

                successModal.classList.remove(
                    "active"
                );

            }

        }
    );

}



// =====================================================
// CLICK OUTSIDE MODAL
// =====================================================

document
    .querySelectorAll(".modal")
    .forEach(
        modal => {

            modal.addEventListener(
                "click",
                event => {

                    if (
                        event.target === modal
                    ) {

                        modal.classList.remove(
                            "active"
                        );

                    }

                }
            );

        }
    );



// =====================================================
// ESCAPE KEY
// =====================================================

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            document
                .querySelectorAll(".modal")
                .forEach(
                    modal => {

                        modal.classList.remove(
                            "active"
                        );

                    }
                );

        }

    }
);



// =====================================================
// CONFETTI
// =====================================================

function createConfetti() {

    const container =
        document.getElementById(
            "confetti-container"
        );


    if (!container) return;


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
                    Math.random() *
                    symbols.length
                )
            ];


        confetti.style.left =
            Math.random() *
            100 +
            "vw";


        confetti.style.fontSize =
            (
                Math.random() * 10 +
                10
            ) +
            "px";


        confetti.style.animationDuration =
            (
                Math.random() * 1.5 +
                2
            ) +
            "s";


        confetti.style.animationDelay =
            (
                Math.random() * 0.5
            ) +
            "s";


        container.appendChild(
            confetti
        );


        setTimeout(
            () => {

                confetti.remove();

            },
            4000
        );

    }

}



// =====================================================
// PAGE NAVIGATION
// =====================================================

const backBtn =
    document.getElementById(
        "backBtn"
    );

const homeBtn =
    document.getElementById(
        "homeBtn"
    );

const nextBtn =
    document.getElementById(
        "nextBtn"
    );



// ---------------------------------------------
// BACK
// ---------------------------------------------

if (backBtn) {

    backBtn.addEventListener(
        "click",
        () => {

            window.scrollBy({

                top:
                    -window.innerHeight *
                    0.85,

                behavior: "smooth"

            });

        }
    );

}



// ---------------------------------------------
// HOME
// ---------------------------------------------

if (homeBtn) {

    homeBtn.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}



// ---------------------------------------------
// NEXT
// ---------------------------------------------

if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        () => {

            window.scrollBy({

                top:
                    window.innerHeight *
                    0.85,

                behavior: "smooth"

            });

        }
    );

}