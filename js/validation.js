// database register
class db_register {

    isfound(nameStorge,value) {
        let checkLocal = localStorage.getItem(nameStorge)
        let result = ! checkLocal ? this.setlocalstorge(nameStorge ,value): "that name is already taken"
        return result
    }
    setlocalstorge(key,value) {  localStorage.setItem( key, JSON.stringify(value) )  }
}

//class to shar data
class _startSession  {
    setSessionStorage(key,value) { sessionStorage.setItem(key,JSON.stringify(value)) }
}

// database login
class db_login {

    isfound(name,password) {
        let checkLocal = localStorage.getItem(name)
        if(checkLocal){
            let parsePassword = JSON.parse(checkLocal)
            if( parsePassword[1] == password){
                this.setSessionLogin(name)

                return true
            }
        }
        return 'name Or password is rong !'
    }

    setSessionLogin(name) {
        return sessionStorage.setItem("_login",name)
    }
}

let error = []

function validateHandler(request, name, password, event, email="test@gmail.com") {

    // event.preventDefault();
    let nameInput = document.getElementById(name).value
    let passwordInput = document.getElementById(password).value
    let emailInput = email == 'test@gmail.com' ? email : document.getElementById(email).value 

    // Validate lowercase letters
    Validate(/[a-z]/g ,nameInput ,"your_name: Should be contain lowercase letter \n")
    Validate(/[a-z]/g ,passwordInput ,"password: Should be contain lowercase letter \n")

    // Validate capital letters
    Validate(/[A-Z]/g ,passwordInput ,"password: Should be contain capital uppercase letter \n")

    // Validate numbers
    Validate(/[0-9]/g ,passwordInput ,"password: Should be contain numbers \n")

    // Validate length
    Length(nameInput ,3 ,"your_name: Should be minimum 3 characters \n")
    Length(passwordInput ,7 ,"password: Should be minimum 7 characters \n")

    // Validate Email
    validateEmail(emailInput ,"eamil: Invalid email ! \n")

    if (error != '') {
        alert(error);
        error = []
    }else{
        if(request == "register"){

            let register = new db_register()
            let newUser = register.isfound(nameInput,[emailInput,passwordInput])

            // if success
            if(newUser == undefined){
            
                _publicSession(nameInput,[emailInput,passwordInput])
                alert('Success !')
                return true
            }

            alert(newUser)
        }else {
            _loginHandler(nameInput ,passwordInput)
        }
    }
    event.preventDefault()
    return false
}
function _publicSession(key,value) {
    let setSession = new _startSession()
    setSession.setSessionStorage(key ,value)
}

function Validate(match ,input ,msg) {
    if(!input.match(match)) return error.push(msg)
}

function Length(input ,lens ,msg) {
    if(input.length < lens) return error.push(msg)
}

function validateEmail(input ,msg) {
    let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!input.match(validRegex)) return error.push(msg)
}

function _loginHandler(name ,password){

    let dbLogin = new db_login()
    let result = dbLogin.isfound(name ,password)

    if(result == true){
        
        alert(name +' is login ^_^ ');

        location.reload(); 

        return true
    }

    alert(result);

}