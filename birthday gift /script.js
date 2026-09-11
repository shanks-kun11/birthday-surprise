/* =========================
   OPEN ENVELOPE
========================= */

function openEnvelope() {

    const envelope =
        document.querySelector(".envelope");

    envelope.classList.add("open");

    const music =
        document.getElementById("music");

    music.play().then(function() {
        musicPlaying = true;
        // Button doesn't exist yet at this point (still on opening screen),
        // so we update it once the birthday section shows, below.
    }).catch(function() {
        console.log("Music needs user interaction.");
    });

    setTimeout(function() {

        document.getElementById("opening").classList.add("hidden");
        document.getElementById("birthday").classList.remove("hidden");

        // Sync the button label now that it's visible
        const button = document.querySelector(".music-button");
        if (musicPlaying && button) {
            button.innerHTML = "⏸️ Pause Music";
        }

        startTyping();
        createFallingHearts();

    }, 1400);
}



/* =========================
   TYPING EFFECT
========================= */

const message =
`Happy Birthday babii ko! 🎂❤️

I just want you to know that you are one of the most special people in my life.

I hope your birthday is filled with genuine smiles, beautiful moments, and everything that makes your heart happy.

No matter where life takes you, I hope you continue chasing your dreams and believing in yourself.

You deserve happiness, love, peace, and all the beautiful things this world can offer.

Thank you for being you. 💗

Once again, Happy Birthday babii ko! 🎉

I hope this little surprise made you smile. ❤️`;

let index = 0;

function startTyping() {

    const typing =
        document.getElementById("typing");

    typing.innerHTML = "";

    index = 0;

    typeWriter(typing);
}


function typeWriter(element) {

    if (index < message.length) {

        let character =
            message.charAt(index);

        if (character === "\n") {
            element.innerHTML += "<br>";
        } else {
            element.innerHTML += character;
        }

        index++;

        setTimeout(function() {
            typeWriter(element);
        }, 35);
    }
}



/* =========================
   MUSIC
========================= */

let musicPlaying = false;

function toggleMusic() {

    const music =
        document.getElementById("music");

    const button =
        document.querySelector(".music-button");

    if (musicPlaying) {

        music.pause();

        button.innerHTML =
            "🎵 Play Music";

        musicPlaying = false;

    } else {

        music.play();

        button.innerHTML =
            "⏸️ Pause Music";

        musicPlaying = true;
    }
}



/* =========================
   CLICKABLE HEARTS
========================= */

function heartMessage(number) {

    const text =
        document.getElementById("heart-text");

    const messages = {

        1:
        "❤️ You deserve to be loved and appreciated every single day.",

        2:
        "💗 Your smile can make an ordinary day feel special.",

        3:
        "💖 I hope you never forget how important you are.",

        4:
        "💕 May your heart always find reasons to be happy.",

        5:
        "💝 If this heart could talk, it would say: you are special to me."
    };

    text.innerHTML = messages[number];

    createHeartExplosion();
}



/* =========================
   HEART EXPLOSION
========================= */

function createHeartExplosion() {

    const hearts = [
        "❤️",
        "💗",
        "💖",
        "💕",
        "💝"
    ];

    for (let i = 0; i < 15; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top =
            "50vh";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.zIndex = "100";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const animation =
            heart.animate(
                [
                    {
                        transform:
                            "translateY(0) scale(1)",
                        opacity: 1
                    },

                    {
                        transform:
                            "translateY(-200px) scale(1.5)",
                        opacity: 0
                    }
                ],
                {
                    duration:
                        Math.random() * 1000 + 1000,

                    easing: "ease-out"
                }
            );

        animation.onfinish =
            function() {
                heart.remove();
            };
    }
}



/* =========================
   FALLING HEARTS
========================= */

function createFallingHearts() {

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💝"
    ];

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top = "-30px";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.zIndex = "50";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const duration =
            Math.random() * 3000 + 3000;

        const animation =
            heart.animate(
                [
                    {
                        transform:
                            "translateY(0) rotate(0deg)",
                        opacity: 1
                    },

                    {
                        transform:
                            "translateY(110vh) rotate(360deg)",
                        opacity: 0
                    }
                ],
                {
                    duration: duration,
                    easing: "linear"
                }
            );

        animation.onfinish =
            function() {
                heart.remove();
            };
    }
}



/* =========================
   FINAL SURPRISE
========================= */

function showSurprise() {

    const surprise =
        document.getElementById("surprise");

    surprise.classList.remove("hidden");

    createFallingHearts();

    // Scroll to surprise
    setTimeout(function() {

        surprise.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 200);
}