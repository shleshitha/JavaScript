const users = [
    { username: 'shlesh', password: '123' },
    { username: 'assignment', password: '456' }
];

const usernameInput = document.querySelector('.usernameInput');
const passwordInput = document.querySelector('.PasswordInput');
const loginButton = document.querySelector('.loginButton');
const resultBox = document.querySelector('.result');

loginButton.addEventListener('click', () => {
    resultBox.innerText = ''; // clear previous messages

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const messages = [];

    if (!username) messages.push('Enter your username');
    if (!password) messages.push('Enter your password');

    if (messages.length === 0) {
        const isValid = check(username, password);
        if (isValid) {
            messages.push('✅ LOGIN Successful');
            // Clear inputs
            usernameInput.value = '';
            passwordInput.value = '';
        } else {
            messages.push('❌ Wrong credentials');
        }
    }

    // Show all messages
    resultBox.innerText = messages.join('\n');
});

function check(usernameInput, passwordInput) {
    return users.some(user => 
        user.username === usernameInput && user.password === passwordInput
    );
}
