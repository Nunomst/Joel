// Function to spawn toast
export function snackbar(msg, success) {
    let snackbar = document.createElement("div");
    snackbar.setAttribute("id", "snackbar");
    snackbar.innerHTML = msg;
    document.body.appendChild(snackbar);
    snackbar.className = "show";

    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);

    snackbar.style.backgroundColor = success ? "#4BB543" : "#DC3545";
}