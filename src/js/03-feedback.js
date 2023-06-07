import throttle from 'lodash.throttle';

const refs = {
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
  form: document.querySelector('.feedback-form'),
};

const userData = {
  email: '',
  message: '',
};

refs.email.addEventListener(
  'input',
  throttle(e => {
    userData.email = String(e.target.value.trim());
    localStorage.setItem('feedback-form-state', JSON.stringify(userData));
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  }, 500)
);

refs.message.addEventListener(
  'input',
  throttle(e => {
    userData.message = String(e.target.value.trim());
    localStorage.setItem('feedback-form-state', JSON.stringify(userData));
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  }, 500)
);

let parseUserData = null;

try {
  parseUserData = JSON.parse(localStorage.getItem('feedback-form-state'));
} catch (error) {
  console.error('Error parsing feedback-form-state:', error);
}

if (parseUserData) {
  refs.email.value = parseUserData.email;
  refs.message.value = parseUserData.message;
}

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(parseUserData);
  refs.email.value = '';
  refs.message.value = '';
  localStorage.removeItem('feedback-form-state');
});
