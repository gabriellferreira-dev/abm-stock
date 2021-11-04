import { useContext, useRef, useState } from 'react';
import { Form } from '../styled-components/Form';
import { Input } from '../styled-components/Input';
import { TextField } from '../styled-components/TextField';
import checkEmptyField from '../utils/checkEmptyField';
import { GlobalContext } from '../provider/Provider';
import * as api from '../services/api';
import checkExistClient from '../utils/checkExistClient';

export default function FormClientLogin() {
  const loginInputRef = useRef();
  const { setClients, setClient, setLogged } = useContext(GlobalContext);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const getClients = async () => {
    const clients = await api.get('clients');
    setClients(clients);
  };

  const handleChange = ({ target: { value } }) => {
    const fieldValidation = checkEmptyField(loginInputRef.current);

    setErrorMessage(fieldValidation ? fieldValidation : '');

    setEmail(value);
    getClients();
  };

  const validateClient = async () => {
    const clientExist = await checkExistClient(email);

    setErrorMessage(!clientExist ? 'Client not found' : '');

    if (clientExist) {
      setLogged(true);
      setClient(clientExist);
    }
  };

  const handleClick = () => {
    const fieldValidation = checkEmptyField(loginInputRef.current);

    if (!fieldValidation) {
      validateClient();
    }
    setErrorMessage(fieldValidation ? fieldValidation : '');
  };

  return (
    <Form>
      <h1>ABM Stock</h1>
      <div>
        <TextField>
          <Input
            type='email'
            id='input-email'
            placeholder='E-mail'
            required
            ref={loginInputRef}
            name='email'
            onChange={handleChange}
          />
          <label htmlFor='input-email'>E-mail</label>
        </TextField>
        <span>{errorMessage}</span>
        <button type='button' onClick={handleClick}>
          Login
        </button>
      </div>
    </Form>
  );
}
