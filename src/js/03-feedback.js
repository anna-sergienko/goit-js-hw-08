
import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
}

populateTextarea();

refs.form.addEventListener('submit', evt => {
    evt.preventDefault();
    
  const savedValue = localStorage.getItem("feedback-form-state");
  if (savedValue) {
  console.log(savedValue)
}

   evt.currentTarget.reset();
  localStorage.removeItem("feedback-form-state");
});



refs.form.addEventListener('input', throttle(evt => {
  let getValue = localStorage.getItem('feedback-form-state');
  getValue = getValue ? JSON.parse(getValue) : {};
  getValue[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(getValue));
}),500)



function populateTextarea() {
  let getValue = localStorage.getItem('feedback-form-state');
  if (getValue) {
    getValue = JSON.parse(getValue);
    Object.entries(getValue).forEach(([name, value]) => {
      refs.form.elements[name].value = value;
    });
  }
}

