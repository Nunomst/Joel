export function snackbar(msg) {
    let snackbar = document.createElement("div");
   snackbar.setAttribute("id", "snackbar");
    snackbar.innerHTML = msg;
    document.body.appendChild(snackbar);
    snackbar.className = "show";

    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}