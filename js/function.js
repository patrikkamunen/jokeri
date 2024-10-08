const tableBody = document.querySelector('#jokerTable tbody'); 
const rowCountElement = document.getElementById('rowCount');   
const newRowButton = document.getElementById('newRow');        

let rowCount = 0; 

const getRandomJokerNumber = () => {
    return Math.floor(Math.random() * 10); 
}

const addJokerRow = () => {
    const newRow = document.createElement('tr');

    for (let i = 0; i < 7; i++) {
        const newCell = document.createElement('td');
        newCell.textContent = getRandomJokerNumber(); 
        newRow.appendChild(newCell); 
    }

    tableBody.appendChild(newRow);

    rowCount++;
    rowCountElement.textContent = rowCount; 
}

newRowButton.addEventListener('click', addJokerRow);
