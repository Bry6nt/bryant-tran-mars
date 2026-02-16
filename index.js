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
copyright.innerHTML = `© ${thisYear} Bryant Tran`;

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