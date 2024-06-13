function MarkedAttendence(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const status = document.getElementById('status').value;

    let message = `${name} - ${status}`;

    if(status === 'present'){
        message = `${name} you are present. Good job!`;
    }
    else if(status === 'absent'){
        message = `${name} you are absent. Now you will get fined, and it will be deducted from your salary.`;
    }
    else if(status === 'late'){
        message = `${name} you are late. You will receive a warning.`;
    }

    let listItem = document.createElement('li');

    listItem.textContent = message;

    listItem.classList.add(status.toLowerCase());

    document.getElementById('list').appendChild(listItem);

    document.getElementById('name').value = '';
}

document.getElementById('formAttendence').addEventListener('submit', MarkedAttendence);
