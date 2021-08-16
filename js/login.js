document.getElementById('login-btn').addEventListener('click',function(){

    // get user email    
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    emailField.value = '';

    // user password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    passwordField.value = '';
    
    // check email and password
    if(userEmail == 'baperbeta@gmail.com' && userPassword == 'baperbank'){
        window.location.href = 'banking.html';
    }else{
        alert('Please Write This Email and Password. \n Email : baperbeta@gmail.com \n Password : baperbank ')
    }
})