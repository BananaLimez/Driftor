// Get buttons (if they exist)
const indexSigninBtn = document.getElementById("index-register");
const indexRegisterBtn = document.getElementById("index-signin");

// Get forms (if they exist)
const signinForm = document.getElementById("sign-in");
const registerForm = document.getElementById("register");

// ------------------------
// 1. Handle clicks on index.html
// ------------------------
if (indexSigninBtn) {
    indexSigninBtn.addEventListener("click", () => {
        // Go to signinup.html with ?form=register
        window.location.href = "signinup.html?form=register";
    });
}

if (indexRegisterBtn) {
    indexRegisterBtn.addEventListener("click", () => {
        // Go to signinup.html with ?form=signin
        window.location.href = "signinup.html?form=signin";
    });
}

// ------------------------
// 2. Handle URL parameter on signinup.html
// ------------------------
if (signinForm && registerForm) {
    const params = new URLSearchParams(window.location.search);
    const formType = params.get("form");

    if (formType === "register") {
        signinForm.style.display = "none";
        registerForm.style.display = "flex";
    } else if (formType === "signin") {
        signinForm.style.display = "flex";
        registerForm.style.display = "none";
    } else {
        // Default: show sign in
        signinForm.style.display = "flex";
        registerForm.style.display = "none";
    }

    // ------------------------
    // 3. Allow switching inside signinup.html
    // ------------------------
    const switchToSigninBtn = registerForm.querySelector("button");
    const switchToRegisterBtn = signinForm.querySelector("button");

    if (switchToSigninBtn) {
        switchToSigninBtn.addEventListener("click", (e) => {
            e.preventDefault();
            signinForm.style.display = "flex";
            registerForm.style.display = "none";
        });
    }

    if (switchToRegisterBtn) {
        switchToRegisterBtn.addEventListener("click", (e) => {
            e.preventDefault();
            signinForm.style.display = "none";
            registerForm.style.display = "flex";
        });
    }
}
