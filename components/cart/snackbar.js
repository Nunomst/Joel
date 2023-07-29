export function snackbar(msg, success) {
    let snackbar = document.createElement("div");
    snackbar.setAttribute("id", "snackbar");
    snackbar.innerHTML = msg;
    document.body.appendChild(snackbar);
    snackbar.className = "show";

    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);

    if(success)
    {
        snackbar.style.backgroundColor = "green"
    }
    else
    {
        snackbar.style.backgroundColor = "red";
    }
}