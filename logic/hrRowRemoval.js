export function handleHrRowRemove() {
    let deleteBtns = document.querySelectorAll('.fa-trash-can');
    let hrElements = document.querySelectorAll('.hr-row');

    deleteBtns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        hrElements[i].remove();
      })
    }
    );

    if (deleteBtns.length === 1) {
        hrElements.forEach(hr => hr.remove());
    }
  }