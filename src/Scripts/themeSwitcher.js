function toggleDarkMode(enabled) {

    if (enabled == true) {
        console.log("Darkmode enabled");
        document.body.classList.add("dark");
        document.getElementById("darkModeLabel").innerHTML = "☀️";

        localStorage.setItem("themePreference", "dark")
    }
    else if (enabled == false) {
        console.log("Darkmode disabled")
        document.body.classList.remove("dark");
        document.getElementById("darkModeLabel").innerHTML = "🌙";
        
        localStorage.setItem("themePreference", "light")
    }
    else
        console.log("Invalid input:" + enabled);

}