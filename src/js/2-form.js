//У JS напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

const feedbackFormEl = document.querySelector('.feedback-form');
let formData = { email: "", message: "" };

const FormFieldsFill = () => {
  const DataFromLocalS = JSON.parse(localStorage.getItem('data-feedback-form'));

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

  localStorage.setItem('data-feedback-form', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  event.target.reset();
  localStorage.removeItem('data-feedback-form');
};

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);