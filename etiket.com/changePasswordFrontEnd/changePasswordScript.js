let inputPassword = document.getElementById('password');
let inputConfirmPassword = document.getElementById('confirm_password');
validate = () => {  
    if   (inputPassword.value == inputConfirmPassword.value) 
         { alert('Password successfully changed!');} 
    else { alert('Passwords do not match!'); }
}
check = () => {
    if    (inputPassword.value == inputConfirmPassword.value) 
          {
            document.getElementById('message').style.color = 'green';
            document.getElementById('message').innerHTML = 'Press Change Password to save changes';
          } 
    else  {
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerHTML = 'Passwords do not match';
          }
}
reset.onclick = () => {document.getElementById('message').innerHTML = '';}