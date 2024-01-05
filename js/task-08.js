/* Exercițiul 8
Scrieți un script de control al formularului de login.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

Gestionarea trimiterii formularului form.login-form trebuie să fie în cadrul evenimentului submit.
La trimiterea formularului, pagina nu trebuie să se reîncarce.
Dacă formularul are câmpuri goale, afișați un alert care avertizează că toate câmpurile trebuie completate.
Dacă utilizatorul a completat toate câmpurile și a trimis formularul, colectați valorile câmpului într-un obiect în care numele câmpului va fi numele proprietății, iar valoarea câmpului va fi valoarea proprietății. Pentru a accesa elementele formularului, folosiți proprietatea elements.
Afișați obiectul cu datele introduse în consolă și ștergeți valorile câmpurilor din formular, folosind metoda reset. */

 
 const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('button');


function onSubmit(event) {
    event.preventDefault();

    const formElems = event.currentTarget.elements;
    const email = formElems.email.value;
    const password = formElems.password.value;

    if(email === '' || password === '') {
        alert('Please fill in the necessary fields');
    } 
    const form = {
        email: email,
        password: password
    }

    console.log(form);
    event.currentTarget.reset();

}

loginForm.addEventListener('submit', onSubmit);