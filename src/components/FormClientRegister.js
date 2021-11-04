import { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Form } from '../styled-components/Form';
import { Input } from '../styled-components/Input';
import { TextField } from '../styled-components/TextField';
import checkEmptyField from '../utils/checkEmptyField';
import * as api from '../services/api';
import checkExistClient from '../utils/checkExistClient';
import validateManyFields from '../utils/validateManyFields';

export default function FormClientRegister() {
  const [client, setClient] = useState({});
  const [validation, setValidation] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [isCreated, setCreated] = useState(false);
  const inputsContainerRef = useRef();

  const validateFields = () => {
    const inputs = inputsContainerRef.current.querySelectorAll('input');
    const result = validateManyFields(inputs);
    setValidation(result);

    if (!result) {
      setErrorMessage('Fill in all fields.');
    } else {
      setErrorMessage('');
    }
  };

  const createClient = async () => {
    const clientExist = await checkExistClient(client.email);

    if (!clientExist) {
      await api.create('clients', client);
      setErrorMessage('');
      setCreated(true);
    }
    if (clientExist) {
      setErrorMessage('Customer already registered.');
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setClient({ ...client, [name]: value });
    if (!validation) {
      validateFields();
    }
  };

  const handleClick = () => {
    validateFields();

    const inputsValidation = [!client.name, !client.email, !client.lastName];

    if (!inputsValidation.includes(true)) {
      createClient();
    }
  };

  if (isCreated) return <Redirect to='/login' />;

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
        <span hidden={!errorMessage}>{errorMessage}</span>
      </div>
      <button type='button' onClick={handleClick}>
        Register
      </button>
    </Form>
  );
}
