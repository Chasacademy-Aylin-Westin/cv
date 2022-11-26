const employmentList = document.querySelector('.employmentList')
const educationList = document.querySelector('.educationList')
const skillsList = document.querySelector('.skillsList')
 
async function getData() {
    const url = '../json/cv.json';
    let response = await fetch(url);
    console.log('response: ', response);

    if(response.ok) { 
        let json = await response.json();
        console.log('json: ', json);
 
        json.employment.forEach(element => {
            employmentList.innerHTML += `
            <h4>${element.heading}</h4>
            <li>${element.location}</li>
            <li>${element.jobTitle}</li>
            <li>${element.text}</li>`;
        });

        json.education.forEach(element => {
            educationList.innerHTML += `
            <h4>${element.edu}</h4>
            <li>${element.school}</li>
            <li>${element.period}</li>`;
        });

        json.skills.forEach(element => {
            skillsList.innerHTML += `
            <li>
            <p>${element.lang}</p>
            </li>`;
        });
 
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}

getData();

