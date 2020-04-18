const button = document.getElementById("btn");
const name = document.getElementById("name");
const email = document.getElementById("email");
const address = document.getElementById("address");
const city = document.getElementById("city");
const phone = document.getElementById("phone");
const website = document.getElementById("website");
const companyName = document.getElementById("company-name");
const img = document.getElementById("image-id");

const generate_profile = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then((res) => {
            getImage();
            const data = res;
            const randomNumber = Math.round(Math.random() * 10);
            document.getElementById("second").style.display = "flex";

            name.innerText = data[randomNumber].name;
            email.innerText = data[randomNumber].email;
            address.innerText = data[randomNumber].address.street;
            city.innerText = data[randomNumber].address.city;
            phone.innerText = data[randomNumber].phone;
            website.innerText = data[randomNumber].website;
            companyName.innerText = data[randomNumber].company.name;
        });
}


const getImage = () => {
    const randomNum = Math.round(Math.random() * 20);
    fetch(`https://robohash.org/${randomNum}?set=set2`)
        .then((res) => {
            const url = res.url;
            img.src = url;
        });
}

// Event Listener
button.addEventListener('click', generate_profile);