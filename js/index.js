// footer
const footerElement = document.createElement('footer');

// append footer
document.body.appendChild(footerElement);

// date
const today = new Date();

// this year
const thisYear = today.getFullYear();

// create footer variable
const footer = document.querySelector('footer');

// create copyright variable
const copyright = document.createElement('p');

// footer content
copyright.innerHTML = `&copy ${thisYear} Bryant Tran`;

//append copyright to footer
footer.appendChild(copyright);  

// skills
const skills = ['HTML', 'CSS', 'JavaScript', 'SQL', 'Github'];

// skills section
const skillsSection = document.querySelector('#Skills');

// select <ul> in skills section
const skillsList = skillsSection.querySelector('ul');

// loop through skills array   
for (let i = 0; i < skills.length; i++) {
    // create list item
    const skill = document.createElement('li');
    // set list item content
    skill.innerText = skills[i];
    // append list item to skills list
    skillsList.appendChild(skill);
}

// message form selection
const messageForm = document.forms['leave_message'];

// handle form submit
messageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    console.log(usersName, usersEmail, usersMessage);

    // Select the #messages section and its <ul>
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');

    // Create new list item
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>${usersMessage}</span>`;

    // Create edit button
    const editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.type = 'button';
    editButton.style.marginLeft = '8px';
    editButton.addEventListener('click', function() {
        const span = newMessage.querySelector('span');
        const currentText = span.innerText;
        // Create input for editing
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        input.style.marginLeft = '8px';
        // Create save button
        const saveButton = document.createElement('button');
        saveButton.innerText = 'save';
        saveButton.type = 'button';
        saveButton.style.marginLeft = '8px';
        // Replace span with input and add save button
        newMessage.replaceChild(input, span);
        editButton.style.display = 'none';
        newMessage.insertBefore(saveButton, newMessage.querySelector('button.remove'));
        input.focus();
        saveButton.addEventListener('click', function() {
            span.innerText = input.value;
            newMessage.replaceChild(span, input);
            saveButton.remove();
            editButton.style.display = '';
        });
        // Optional: save on Enter key
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                saveButton.click();
            }
        });
    });

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.className = 'remove';
    removeButton.addEventListener('click', function() {
        const entry = this.parentNode;
        entry.remove();
    });

    // Append edit and remove buttons to message
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    // Append message to list
    messageList.appendChild(newMessage);

    messageForm.reset();
});

