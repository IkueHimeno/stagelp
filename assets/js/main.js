// ハンバーガーメニュー
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-open");
    nav.classList.toggle("is-open");

    if (nav.classList.contains("is-open")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        hamburger.classList.remove("is-open");
        document.body.style.overflow = "";
    });
});

// YouTube表示
window.addEventListener("load", () => {
    const modal = document.getElementById("videoModal");
    const closeBtn = document.getElementById("closeVideoModal");
    const iframe = modal.querySelector("iframe");

    modal.style.display = "flex";

    const closeModal = () => {
        modal.style.display = "none";
        iframe.src = iframe.src;
    };

    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", e => {
        if(e.target === modal) closeModal();
    });
});
