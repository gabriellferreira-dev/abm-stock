import { useRef, useState } from 'react';
import { Form } from '../styled-components/Form';
import { Input } from '../styled-components/Input';
import { TextField } from '../styled-components/TextField';
import checkEmptyField from '../utils/checkEmptyField';

export default function FormClientRegister() {
  const [client, setClient] = useState({});
  const [validation, setValidation] = useState(true);
  const inputsContainerRef = useRef();

  const validateFields = () => {
    const inputs = inputsContainerRef.current.querySelectorAll('input');
    inputs.forEach((input) => {
      checkEmptyField(input);
    });
    const result = Array.from(inputs).every((input) => input.value);
    setValidation(result);
  };

  const handleChange = ({ target: { name, value } }) => {
    setClient({ ...client, [name]: value });
    if (!validation) {
      validateFields();
    }
  };

  const handleClick = () => {
    validateFields();
  };

  return (
    <Form name='register'>
      <h1>Register</h1>
      <div ref={inputsContainerRef}>
        <TextField register>
          <Input
            type='text'
            id='input-name'
            placeholder='Name'
            name='name'
            required
            error={client.name === ''}
            onChange={handleChange}
          />
          <label htmlFor='input-name'>Name</label>
        </TextField>
        <TextField>
          <Input
            type='text'
            id='input-last-name'
            placeholder='Last Name'
            name='lastName'
            required
            error={client.lastName === ''}
            onChange={handleChange}
          />
          <label htmlFor='input-last-name'>Last Name</label>
        </TextField>
        <TextField>
          <Input
            type='email'
            id='input-email'
            placeholder='E-mail'
            name='email'
            required
            error={client.email === ''}
            onChange={handleChange}
          />
          <label htmlFor='input-email'>E-mail</label>
        </TextField>
        <span hidden={validation}>Fill in all fields.</span>
      </div>
      <button type='button' onClick={handleClick}>
        Register
      </button>
    </Form>
  );
}
