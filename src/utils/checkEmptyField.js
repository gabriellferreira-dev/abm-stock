const checkEmptyField = (input) => {
  if (!input.value) {
    input.classList.add('error');
    return false;
  } else {
    input.classList.remove('error');
    return true;
  }
};

export default checkEmptyField;
