//////////////////// REGISTRATION /////////////////////////
const form = document.getElementById('registration-form');

 form.addEventListener('submit', (event) => {
     event.preventDefault();

     const userName = form.elements.userName.value;
     const firstName = form.elements.firstName.value;
     const lastName = form.elements.lastName.value;
     const email = form.elements.email.value;
     const password = form.elements.password.value;
     // clear error messages
     userNameError.textContent = '';     
     firstNameError.textContent = '';
     lastNameError.textContent = '';
     emailError.textContent = '';
     passwordError.textContent = '';
     const errors = {};

     if (!userName) {
        errors.userName = 'Please enter a valid Username';
    }
    if (!password) {
        errors.password = 'Please enter your password';
    }
     if (!firstName) {
         errors.firstName = 'Please enter a valid first name';
     }
     if (!lastName) {
         errors.lastName = 'Please enter a valid last name';
     }
     if (!email) {
         errors.email = 'Please enter your email';
     }


     if (Object.keys(errors).length > 0) {
         displayErrors(errors);
         return;
     }

     const formData = {
         userName: userName,
         password: password,
         firstName: firstName,
         lastName: lastName,
         email: email

     };

     fetch('http://localhost:3000/accounts/signup', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(formData)
     })
     .then(response => {
         if (!response.ok) {
             throw new Error('Network response was not ok');
         }
         return response.json();
     })
     .then(data => {
         console.log(data);
     })
     .catch(error => {
         console.error('There was a problem with the fetch operation:', error);
     });
     form.reset();
 });


// displayErrors = errors => {
//     for (const fields in errors) {
//         const errorMessage = errors[fields];
//         const errorElement = document.getElementById(fields + 'Error');
//         errorElement.textContent = errorMessage;
//     }
// }
