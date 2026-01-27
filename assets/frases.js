function typeWriterLoop(element, text, typing = 110, deleting = 70, pause = 1200) {
    let index = 0;
    let isDeleting = false;

    function run() {
        if (!isDeleting) {
            element.textContent = text.slice(0, index + 1);
            index++;

            if (index === text.length) {
                setTimeout(() => isDeleting = true, pause);
            }
        } else {
            element.textContent = text.slice(0, index - 1);
            index--;

            if (index === 0) {
                isDeleting = false;
            }
        }

        setTimeout(run, isDeleting ? deleting : typing);
    }

    run();
}

/* ELEMENTOS */
const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");

/* ANIMAÇÕES */
typeWriterLoop(h1, "Hello! Im Pedro");
typeWriterLoop(h2, "Programador🧑🏿‍💻");
