/* Variable de Regitro */
const singUpForm = document.getElementById("singUpForm");
singUpForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const usuarioRegistrado = users.find(user => user.email === email);
    if (usuarioRegistrado) {
        return swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario ya registrado'
        })
    }
    users.push({nombre: nombre, email: email, password: password});
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = 'login.html';
})
