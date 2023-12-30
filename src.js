document.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
    // Replace 'your-api-url' with the actual URL from which you want to fetch JSON data
    const apiUrl = 'http://localhost:3000/getdata';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayData(data) {
    const dataContainer = document.getElementById('data-container');

    // Assuming the JSON data is an array of objects
    data.forEach(item => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `${item.name} and ${item.weight}`;
        dataContainer.appendChild(listItem);
    });
}