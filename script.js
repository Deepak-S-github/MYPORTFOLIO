
    /** Scroll Animations **/
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, { threshold: 0.1 });
window.addEventListener("load", () => {
    const loader = document.getElementById("loading-screen");
    
    // Simulating a delay for a smoother experience
    setTimeout(() => {
        loader.classList.add("fade-out");
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 1500);
});
function copyEmail() {
    const emailText = "deepakofficail0103@gmail.com"; // Your email
    navigator.clipboard.writeText(emailText).then(() => {
        const notification = document.getElementById("copy-notification");
        notification.style.opacity = "1";  // Show notification
        setTimeout(() => {
            notification.style.opacity = "0"; // Hide after 2 sec
        }, 2000);
    });
}
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("open");
} 