// if the user preference is set to dark use the dark theme when browser loads
var themePreference = localStorage.getItem("themePreference");

if (themePreference == "dark"){
    document.getElementById("darkModeCheckbox").checked = true;
    toggleDarkMode(true);
}
else if (themePreference == "light"){
    document.getElementById("darkModeCheckbox").checked = false;
    toggleDarkMode(false);
}
else {
    document.getElementById("darkModeCheckbox").checked = false;
    toggleDarkMode(false);
}