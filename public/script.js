const contactForm = document.querySelector('.feedback-form');

var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var address = document.getElementById('Address');
var phone = document.getElementById('phone');
var email = document.getElementById('email');
var comment = document.getElementById('comment');





contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    
   
        var emailCheckRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        console.log(email);
        if(email.value.length > 0 & !emailCheckRegEx.test(email.value)) {
            alert('Please enter a valid email');
            return;
        }
    
    
    
    
        
        var phonenoRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        console.log(phone)
        if(phone.value.length > 0 & !phonenoRegEx.test(phone.value))
            {
            alert("Please enter the phone number format");
             return;
            };
    

    alert( ' Thank you for submitting the form.');
    // document.getElementById("form").reset();


    let formData = {
        fname: fname.value,
        lname: lname.value,
        address: address.value,
        phone: phone.value,
        email: email.value,
        comment: comment.value
    }
    console.log(formData);


    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/')
    xhr.setRequestHeader('content-type', 'application/json');
    // xhr.onload = function(){
    //     console.log(xhr.responseText)
    //     if(xhr.responseText == 'success'){
            
    //         fname.value = '';
    //         lname.value = '';
    //         address.value = '';
    //         phone.value = '';
    //         email.value = '';
    //         comment.value = ''
    //         alert('Email Sent');
    //     }else{
    //         alert('Something went Wrong');
    //     }
    // }

    xhr.send(JSON.stringify(formData));
    contactForm.reset();
    alert('Email Sent');
});



    

   

   






