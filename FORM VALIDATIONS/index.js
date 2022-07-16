function validate(){
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var cnf_password = document.getElementById('cnf_password').value

    console.log(username +"\n "+ email +"\n "+ password +" \n"+ cnf_password)
    
    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkmatchpassword(password,cnf_password)
}

function checkusername(username){
    if(username.length > 7){
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('username_error').innerHTML=''
    }else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText='username must be 8 letters long'
    }

}

function checkemail(email){
    if(email.length > 8 && email.includes('@gmail.com')){
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('email_error').innerHTML=''
    }else{
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText='Enter valid email'
    }

}

function checkpassword(password){
    if(password.length > 7 && password.includes('.')){
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error','success')
        document.getElementById('password_error').innerHTML=''
    }else{
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText='Enter valid password '
    }

}

function checkmatchpassword(password,cnf_password){
    if(password==cnf_password && password!='' ){
        document.getElementById('cnf_password').classList.add('success')
        document.getElementById('cnf_password').classList.replace('error','success')
        document.getElementById('cnf_password_error').innerHTML=''
    }else{
        document.getElementById('cnf_password').classList.add('error')
        document.getElementById('cnf_password_error').innerText='password not matched'
    }

}

// console.log(validate())
// console.log(document.getElementById("username").parentNode.id);
// // document.getElementById('username').value = 'myname';