document.addEventListener("DOMContentLoaded", function () {
    /** Particle Background Animation using particles.js **/
    particlesJS.load("particles-js", "particles.json", function () {
        console.log("Particles.js loaded");
    });

    /** Typewriter Effect for Header Text **/
    const typeText = "AI Enthusiast | Full-Stack Developer | Cloud Learner";
    let index = 0;
    function typeWriter() {
        if (index < typeText.length) {
            document.getElementById("header-text").innerHTML += typeText.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    /** Scroll Animations **/
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));

    /** Hover Effects on Projects **/
    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("mouseenter", () => {
            project.classList.add("hovered");
        });
        project.addEventListener("mouseleave", () => {
            project.classList.remove("hovered");
        });
    });

    /** Floating Social Media Icons **/
    const socialIcons = document.createElement("div");
    socialIcons.className = "floating-social-icons";
    socialIcons.innerHTML = `
        <a href="https://github.com/yourgithub" target="_blank" class="social-icon"><i class="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" class="social-icon"><i class="fab fa-linkedin"></i></a>
    `;
    document.body.appendChild(socialIcons);

    /** Dynamic Theme Colors **/
    const themeSwitcher = document.createElement("button");
    themeSwitcher.innerText = "Toggle Theme";
    themeSwitcher.className = "theme-switcher";
    document.body.appendChild(themeSwitcher);
    
    themeSwitcher.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
    });
    
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }
});
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
document.addEventListener("DOMContentLoaded", function () {
    /** Hamburger Menu Toggle **/
    const menuBtn = document.createElement("button");
    menuBtn.className = "menu-btn";
    menuBtn.innerHTML = "&#9776;";
    document.body.appendChild(menuBtn);
    
    const navMenu = document.querySelector(".nav-menu");
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    /** Back-to-Top Button **/
    const backToTop = document.createElement("button");
    backToTop.className = "back-to-top";
    backToTop.innerHTML = "⬆";
    document.body.appendChild(backToTop);
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /** Detect Mobile & Adjust Effects **/
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        document.querySelectorAll(".project").forEach(project => {
            project.addEventListener("click", () => {
                project.classList.toggle("hovered");
            });
        });
    }
});

