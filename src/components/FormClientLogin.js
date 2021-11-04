import { useContext, useRef } from 'react';
import { Form } from '../styled-components/Form';
import { Input } from '../styled-components/Input';
import { TextField } from '../styled-components/TextField';
import checkEmptyField from '../utils/checkEmptyField';
import { GlobalContext } from '../provider/Provider';
import * as api from '../services/api';

export default function FormClientLogin() {
  const loginInputRef = useRef();
  const { setClients, clients } = useContext(GlobalContext);

  const getClients = async () => {
    const clients = await api.get('clients');
    setClients(clients);
  };

  const handleChange = () => {
    getClients();
  };

  const handleClick = () => {
    checkEmptyField(loginInputRef.current);
  };

  console.log(clients)

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
            onChange={handleChange}
          />
          <label htmlFor='input-email'>E-mail</label>
        </TextField>
        <button type='button' onClick={handleClick}>
          Login
        </button>
      </div>
    </Form>
  );
}
