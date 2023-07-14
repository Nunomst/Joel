export function hrRow() { 
    const hrRow = document.createElement('tr');
    const hrCell = document.createElement('td');
    hrCell.setAttribute('colspan', '4');
    const hr = document.createElement('hr');
    hrCell.appendChild(hr);
    hrRow.appendChild(hrCell);
    return hrRow;
}