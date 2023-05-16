const user = JSON.parse(localStorage.getItem('registrado')) || false;
if (!user){
    window.location.href = 'login.html';
}

const logout = document.querySelector('#logout');

logout.addEventListener("click", () =>{
    localStorage.removeItem('registrado');
    window.location.href = 'login.html';
})

