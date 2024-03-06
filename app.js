let signUpPage = document.getElementById('sign-up');
let signInPage = document.getElementById('sign-in');
let backdrop = document.getElementById('backdrop');
let signUpModal = document.getElementById('signUp-Page');
let signInModal = document.getElementById('signIn-Page');
let signUpCancelButton = document.getElementById('cancel-signUp');
let signInCancelButton = document.getElementById('cancel-signIn');
let createAccountLink = document.getElementById('create-account');
let loginLink = document.getElementById('login');
let buttons = document.querySelectorAll('.circle1');
let slide = document.querySelectorAll('.back-pic');

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const removeSignUpModal = () => {
  signUpModal.classList.remove('visible');
};

const addSignUpModal = () => {
  signUpModal.classList.add('visible');
  toggleBackdrop();
};

// const signUpCancel = () => {
//   removeSignUpModalModal();
//   toggleBackdrop();
// };

const removeSignInModal = () => {
  signInModal.classList.remove('visible');
};

const addSignInModal = () => {
  signInModal.classList.add('visible');
  toggleBackdrop();
};

// const signInCancel = () => {
//   removeSignInModal();
//   toggleBackdrop();
// };

const removeModal = () => {
  removeSignInModal();
  removeSignUpModal();
};

const removeBackdropAndModal = () => {
  removeModal();
  toggleBackdrop();
};

const creatAccount = () => {
  removeSignInModal();
  signUpModal.classList.add('visible');
};

const login = () => {
  removeSignUpModal();
  signInModal.classList.add('visible');
};


const slides = () => {
  slide.classList.add('pic2');
};

signUpPage.addEventListener('click', addSignUpModal);
backdrop.addEventListener('click', removeBackdropAndModal);
signInPage.addEventListener('click', addSignInModal);
signUpCancelButton.addEventListener('click', removeBackdropAndModal);
signInCancelButton.addEventListener('click', removeBackdropAndModal);
createAccountLink.addEventListener('click', creatAccount);
loginLink.addEventListener('click', login);
buttons.addEventListener('click',slides);
