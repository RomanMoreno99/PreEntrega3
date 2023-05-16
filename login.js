const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const Users = JSON.parse(localStorage.getItem("users")) || [];
    const valueUser = Users.find(user => user.email === email && user.password === password);
    if(!valueUser) {
        return Swal.fire({
                icon: 'error',
                title: 'Usuario y/o Contraseña incorrecta!',
        })
    }
    loginForm.addEventListener("click", () =>{
    localStorage.setItem('registrado', JSON.stringify(valueUser));
    window.location.href = 'index.html';
    })
    
})