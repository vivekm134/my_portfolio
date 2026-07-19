document.querySelectorAll(".stat-card").forEach(card => {

    card.addEventListener("mouseenter", function () {

        let counter = card.querySelector(".counter");
        let target = Number(counter.getAttribute("data-target"));

        let count = 0;
        let interval = setInterval(() => {

            count++;

            counter.innerText = target > 10 ? count + "+" : count + "+";

            if (count >= target) {
                clearInterval(interval);
                counter.innerText = target + "+";
            }

        }, 150);

    });

    card.addEventListener("mouseleave", function () {
        card.querySelector(".counter").innerText = "5";
    });

});