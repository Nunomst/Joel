// Function to highlight the navbar items
export function highlightNavItem(){
    const buttons = document.querySelectorAll('ion-icon');
    buttons.forEach(button => { button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    }
    )});
}