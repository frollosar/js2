let isValidField = function (field, template) {
    if (template.test(field.value)) {
        field.classList.remove('invalid');
        return true;

    } else {
        field.classList.add("invalid");
        return false;

    }

};

let validateForm = function () {

//Переменные
    let allValid = true;
    let name = document.querySelector('#name');
    let dateOfBirth = document.querySelector("#dateOfBirth");
    let phone = document.querySelector("#phone");
    let mail = document.querySelector('#email');

//Условия 
    
    allValid &= isValidField(name, /^[a-zа-яё]+$/i);
    allValid &= isValidField(dateOfBirth, /^\d{2}-\d{2}-\d{4}$/);
    allValid &= isValidField(phone, /^\+7\(\d{3}\)\d{3}-\d{4}$/);
    allValid &= isValidField(mail, /^[a-z0-9]+[a-z0-9.-]+@[a-z0-9.-]+\.[a-z0-9]{2,}$/i);

    console.log(allValid);

    //если все верно

    if (allValid) {
        name.value = '';
        dateOfBirth.value = '';
        phone.value = '';
        mail.value = '';

        document.querySelector('#message').value = '';

        let notify = document.createElement("div");
        notify.classList.add("notify");
        notify.innerHTML = "<p>Форма успешно отправлена</p>";

        document.querySelector('section.feedback').appendChild(notify);
        setTimeout(() => {
            document.querySelector('section.feedback').removeChild(notify)
        }, 1000);
    }
    else{
        $(".invalid").effect( "bounce", "slow" );
        }
};

$(document).ready(function () {
    let formButton = $('#send-Form');

    formButton.on('click', (e) => {
        console.log('click');
        e.preventDefault();
        validateForm();
    })
}); 