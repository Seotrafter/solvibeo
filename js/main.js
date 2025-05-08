document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");

    if (!cookieBanner || !acceptBtn || !declineBtn) return;

    const cookiesAccepted = localStorage.getItem("cookiesAccepted") === "true";
    const cookiesDeclined = localStorage.getItem("cookiesDeclined") === "true";

    if (!cookiesAccepted && !cookiesDeclined) {
        cookieBanner.style.display = "flex";
    }

    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
    });

    declineBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesDeclined", "true");
        cookieBanner.style.display = "none";
    });
});
