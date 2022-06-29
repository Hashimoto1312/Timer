watch = () => {

    // FORMATA SEGUNDOS EM FORMATO DE HORARIO
    getTimeFromSeconds = (seconds) => {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString("pt-BR", {
            hour12: false,
            timeZone: "UTC"
        });
    }

    const timer = document.getElementById("timer");
    let seconds = 0;
    let watch;

    initTimer = () => {
        watch = setInterval(() => {
            seconds++;
            timer.innerHTML = getTimeFromSeconds(seconds);
        }, 1000)
    }

    document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("init")) {
            timer.classList.remove("paused");
            clearInterval(watch);
            initTimer(); 
        }

        if (el.classList.contains("pause")) {
            clearInterval(watch);
            timer.classList.add("paused");
        }

        if (el.classList.contains("reset")) {
            timer.classList.remove("paused");
            clearInterval(watch);
            timer.innerHTML = "00:00:00";
            seconds = 0;
        }
    })
}
watch();