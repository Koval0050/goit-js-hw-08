import throttle from 'lodash.throttle';

const refs = {
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
  form: document.querySelector('.feedback-form'),
};

let userData = {
  email: '',
  message: '',
};

//Якщо localStorage не порожній, заповнити дані користувача та відобразити дані в полях
showUserData();

refs.form.addEventListener(
  'input',
  throttle(() => {
    getUserData();
  }, 500)
);

refs.form.addEventListener('submit', e => {
  submitUserData(e);
});

function getUserData() {
  const emailValue = refs.email.value.trim();
  const messageValue = refs.message.value.trim();

  userData.email = emailValue;
  userData.message = messageValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
}

function submitUserData(e) {
  e.preventDefault();
  console.log(userData);
  refs.email.value = '';
  refs.message.value = '';
  localStorage.removeItem('feedback-form-state');
}

function showUserData() {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    userData = JSON.parse(storedData);
    refs.email.value = userData.email;
    refs.message.value = userData.message;
  }
}
