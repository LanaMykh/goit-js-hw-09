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
 
  event.preventDefault(); 

  const fields = feedbackFormEl.elements;
  let allFieldsFilled = true;

  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];

      if ((field.tagName === 'INPUT' || field.tagName === 'TEXTAREA') && !field.value.trim()) {
        allFieldsFilled = false;
    }; 
  }

  //або без перебору, просто по іменам
  // if (!feedbackFormEl.email.value.trim() || !feedbackFormEl.message.value.trim()) {
  //    allFieldsFilled = false;
  //  }


  if (!allFieldsFilled) {
    alert('Please fill in all fields.');
  } else {
    console.log(formData);
    formData = {};
    event.target.reset();
    localStorage.removeItem('feedback-form-state');  
  };

 
//old code
  //  const fields = feedbackFormEl.querySelectorAll('input, textarea');
  //   let allFieldsFilled = true;
    
  //   fields.forEach((field)=> {
  //   if (!field.value.trim()) {
  //     allFieldsFilled = false;
  //     } 
  //  });
 
  // if (!allFieldsFilled) {
  //   // event.preventDefault(); 
  //   alert('Please fill in all fields.');
  //   }
  // else {
  //   event.target.reset();
  //   localStorage.removeItem('feedback-form-state');  
  //   };

};

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);