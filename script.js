
// Function to handle form submission.
function handleFormSubmit(event) {

    // Prevent the form from submitting so we can validate the input first.
    event.preventDefault();

    //This selects the input element with the name "email" using the querySelector and assigns it to the variable inputEmail.
    let inputEmail = document.querySelector('input[name="email"]');

    // This clears any existing alerts before it shows new ones.
    clearMessages();

    // This checks if the value of the inputEmail is empty. 
    // If it is, an error message is shown using the showError function.
    if (!inputEmail.value.trim()) {
        showError("Well, well. Trying to submit an empty email address are we? Try again.");
        return;
    }

    // This checks whether the email starts with "i-am-".
    // If it doesn't it shows the error message.
    if (!inputEmail.value.startsWith("i-am-")) {
        showError("Hm, your email address is not valid because it doesn't start with 'i-am-'.");
        return;
    }

    // If the input is correct it shows the success message.
    showSuccess("Hooray! You've successfully subscribed.");
}

// This is the function for the incorrect input.
function showError(message) {

    // This creates the error message element
    let errorMessage = document.createElement('div');
    errorMessage.classList.add('alert', 'alert-error');
    errorMessage.innerHTML = `<p>${message}</p>`;

    // I don't really understand how the appendChild works, I encountered several issues while trying to make the code work 
    // After several tries I got to the appendChild and it fixed my issues
    // But I definitely wouldn't be able to explain why cause I'm facing issues understanding all the childs and parents. 
    // I tried to ommit this line as I don't understand how it works exactly, but without it my code wouldn't work :(
    document.querySelector('.sub_section').appendChild(errorMessage);
}

// This is the function for the correct input.
function showSuccess(message) {

    // This creates a new div element to display the success message. 
    let successMessage = document.createElement('div');
    successMessage.classList.add('alert', 'alert-success');
    successMessage.innerHTML = `<p>${message}</p>`;

    // This line selects the element with the class 'sub_section' and appends the success message div element to it.
    document.querySelector('.sub_section').appendChild(successMessage);
}

// This function will remove all existing alert messages.
function clearMessages() {

    // This block selects all elements with the class 'alert' and removes each of them from the DOM using the remove() method. 
    // This clears all existing alert messages from the form.
    let messages = document.querySelectorAll('.alert');
    messages.forEach(message => {
        message.remove();
    });
}

// This selects the first form element in the document and assigns it to the variable form.
let form = document.querySelector('form');

// This line adds an event listener to the form element for the 'submit' event. 
// When the form is submitted, the handleFormSubmit function will be called to handle the submission process.
form.addEventListener('submit', handleFormSubmit);
