import checkEmptyField from './checkEmptyField';

const validateManyFields = (inputs) => {
  inputs.forEach((input) => {
    checkEmptyField(input);
  });
  return Array.from(inputs).every((input) => input.value);
};

export default validateManyFields;
