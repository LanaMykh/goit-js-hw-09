//У JS напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

const feedbackFormEl = document.querySelector('.feedback-form');
let formData = { email: "", message: "" };

const FormFieldsFill = () => {
  const DataFromLocalS = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (DataFromLocalS === null) {
    return;
  }

  formData = DataFromLocalS;

  for (const key in DataFromLocalS) {
    if (DataFromLocalS.hasOwnProperty(key)) {
        feedbackFormEl.elements[key].value = DataFromLocalS[key];
    }
  }
};

FormFieldsFill();

const onFormFieldInput = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
 
   const fields = feedbackFormEl.querySelectorAll('input, textarea');
   let allFieldsFilled = true;
    
   fields.forEach((field)=> {
    if (!field.value.trim()) {
      allFieldsFilled = false;
      } 
   });
 
  if (!allFieldsFilled) {
    event.preventDefault(); 
    alert('Please fill in all fields.');
    }
  else {
    event.target.reset();
    localStorage.removeItem('feedback-form-state');  
    };

};

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);