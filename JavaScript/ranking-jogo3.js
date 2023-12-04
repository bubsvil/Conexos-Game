import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('URL_DO_SEU_BACKEND');
    const data = response.data;

    updateTable(data);
  } catch (error) {
    console.error('Erro ao obter dados do backend', error);
  }
}

function updateTable(data) {
  const tableBody = document.getElementById('ranking-jogo3'); 

  tableBody.innerHTML = '';

  data.forEach(item => {
    const row = document.createElement('tr');

   
    const positionCell = document.createElement('td');
    positionCell.textContent = item.position;

    const scoreCell = document.createElement('td');
    scoreCell.textContent = item.score;

    const usernameCell = document.createElement('td');
    usernameCell.textContent = item.username;

    row.appendChild(positionCell);
    row.appendChild(scoreCell);
    row.appendChild(usernameCell);

    tableBody.appendChild(row);
  });
}

document.addEventListener('DOMContentLoaded', fetchData);