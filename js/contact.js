// database register
class db_contact {

    setlocalstorge(key,value) {  localStorage.setItem( key, JSON.stringify(value) )  }
}


let error = []

function validateHandler(event, name ,email ,subject ,textArea ) {

    // event.preventDefault();
    let nameInput = document.getElementById(name).value
    let emailInput = document.getElementById(email).value
    let subjectInput = document.getElementById(subject).value 
    let textAreaInput = document.getElementById(textArea).value 

    // Validate lowercase letters
    Validate(/[a-z]/g ,nameInput ,"your_name: Should be contain lowercase letter \n")

    // Validate length
    Length(nameInput ,3 ,"your_name: Should be minimum 3 characters \n")
    Length(subjectInput ,7 ,"subject: Should be minimum 7 characters \n")
    Length(textAreaInput ,15 ,"textArea: Should be minimum 15 characters \n")

    // Validate Email
    validateEmail(emailInput ,"eamil: Invalid email ! \n")

    if (error != '') {
        alert(error);
        error = []
    }else{

        let contact = new db_contact()
        contact.setlocalstorge(subjectInput,[nameInput,emailInput,textAreaInput])

        alert("done !")
        return true

    }
    event.preventDefault()
    return false
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