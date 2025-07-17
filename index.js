const tableBody = document.getElementById('table-body');

const data = Array(10).fill({
  date: '27th January 2023',
  id: 253,
  status: 'Purchased Serial 13109045',
  devices: 1,
  credit: 'Less: 1080'
});

// Replace one record to be 'Booked'
data[3] = {
  ...data[3],
  status: 'Booked ID 243 13109045'
};

data.forEach(row => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${row.date}</td>
    <td>${row.id}</td>
    <td>${row.status}</td>
    <td>${row.devices}</td>
    <td>${row.credit}</td>
  `;
  tableBody.appendChild(tr);
});
