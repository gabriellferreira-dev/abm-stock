import { useRef } from 'react';
import { Form } from '../styled-components/Form';
import { Input } from '../styled-components/Input';
import { TextField } from '../styled-components/TextField';
import checkEmptyField from '../utils/checkEmptyField';

export default function FormClientLogin() {
  const loginInputRef = useRef();

  const handleClick = () => {
    checkEmptyField(loginInputRef.current);
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
          />
          <label htmlFor='input-email'>E-mail</label>
        </TextField>
        <button type='button' onClick={handleClick}>Login</button>
      </div>
    </Form>
  );
}
