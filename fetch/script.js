async function generateTable(endpoint) {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
  
      if (!data || data.length === 0) {
        throw new Error('Nenhum dado disponível.');
      }
  
      const keys = Object.keys(data[0]);
      const table = document.createElement('table');
      const headerRow = document.createElement('tr');
  
      keys.forEach((key) => {
        const th = document.createElement('th');
        th.textContent = key;
        headerRow.appendChild(th);
      });
  
      table.appendChild(headerRow);
  
      data.forEach((item) => {
        const row = document.createElement('tr');
        keys.forEach((key) => {
          const cell = document.createElement('td');
          cell.textContent = item[key];
          row.appendChild(cell);
        });
        table.appendChild(row);
      });
  
      return table;
    } catch (error) {
      console.error('Erro ao gerar a tabela:', error);
      return null;
    }
  }
  