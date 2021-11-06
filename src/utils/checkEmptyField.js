const checkEmptyField = (input) => {
  if (!input.value) {
    input.classList.add('error');
    return `Field ${input.name} is required.`;
  } else {
    input.classList.remove('error');
  }
};

export default checkEmptyField;
