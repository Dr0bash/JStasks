const registeredUsers = [
    ['admin', 'KoI18'],
    ['manager', 'SuperMe108'],
    ['editor', '12345'],
];

const form = document.querySelector('form');
const loginInput = document.querySelector('input[name="login"]');
const passInput = document.querySelector('input[name="password"]');
const btn = document.querySelector('button');

form.addEventListener('submit', handleSubmit);

form.addEventListener('submit', handleSubmit);
loginInput.addEventListener('keypress', handleEvent);
passInput.addEventListener('keypress', handleEvent);
btn.addEventListener('keypress', handleEvent);


function validateNotEmpty() {
    if (loginInput.value === "" || passInput.value === "")
        return false;
    return true;
}

function validateUser() {
    let flag = false;
    console.log(loginInput.value);
    for (let user of registeredUsers) {
        if (loginInput.value === user[0] && passInput.value === user[1]) {
            flag = true;
            break;
        }
    }
    return flag;
}

function handleSubmit(event) {
    event.preventDefault();

}

function handleEvent(event) {
    if (event.key === 'Enter') {
        if (event.target === btn) {
            if (!validateNotEmpty()) {
                console.log("fields are required");
                return;
            }
            if (!validateUser()) {
                console.log("user data is not found");
                return;
            }
            //send data
            console.log("user is correct");
            form.reset();

        } else {
            event.target.nextElementSibling.focus();
        }
    }
}