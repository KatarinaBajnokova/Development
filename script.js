let emailPrefix = "i-am-";
let inputRecords = [];


window.onload = function() {
 
    let subscriptionForm = document.getElementById("subscribeForm");
    
    
    let emailInput = document.getElementById("emailInput");
    

    subscriptionForm.onsubmit = function (event) {
   
        event.preventDefault();

   
        var existingAlert = document.getElementsByClassName("alert");
        var alertExists = existingAlert.length;


        let startsWithPrefix = emailInput.value.startsWith(emailPrefix);

    
        inputRecords.push(emailInput.value);

        if(emailInput.value == "") 
        {
         
            if(alertExists)
            {
                existingAlert[0].remove();
            }

            addErrorMessage('Oops! It seems you tried to submit an empty email address. Please try again.');
        }
  
        else if (!startsWithPrefix)
        {
            if(alertExists)
            {
                existingAlert[0].remove();
            }

            addErrorMessage("Hmm, your email address isn't valid because it doesn't start with <i><b>i-am-</b></i>"); 
        }
        else
        {
            if(alertExists)
            {
               
                emailInput.classList.remove('red-border');
              
                existingAlert[0].remove();
            }
            
            var successMsg = `<div class="alert alert-success"><p>Congratulations! You've successfully subscribed to our mailing list.</p>`;

            if (inputRecords.length)
            {
                successMsg += `<p>Here's a summary of all the attempts:<ol>`;
                inputRecords.forEach(function(entry) {

                    if(entry == "")
                    {
                        entry = "(empty email address)";
                    }

                    successMsg += '<li>'+ entry + '</li>';
                  });
                successMsg += `</ol></p>`;
            }

            successMsg += `</div>`;

            let fragment = createHtmlElement(successMsg);

            emailInput.parentElement.after(fragment);
        }
    }
}

function addErrorMessage(message)
{

    let fragment = createHtmlElement(`<div class="alert alert-danger validation-error"><p>${message}</p></div>`);
            
   
    emailInput.parentElement.after(fragment);


    emailInput.classList.add('red-border');
}

function createHtmlElement(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}
