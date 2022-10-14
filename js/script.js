const checkLength = (element, errorMessage = "This field is required", minLength = 1) => {
    console.log(element.target.id)
    if (element.target.value.length < minLength) {
        document.getElementById(element.target.id).classList.add('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = errorMessage
    } else {
        document.getElementById(element.target.id).classList.remove('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = ""
    }
}

const checkEmail = (element) => {
    if (element.match(/))
}

const validate = (e) => {
    switch(e.target.type) {
            case "text":
                //2= minimum of 2 character
                checkLength(e, `You must enter a ${e.target.id}`, 2)
                break;
            case "email":
                break;
            case "textarea":
                checkLength(e, `You must enter a ${e.target.id}`, 5)
                break;
    }
}
