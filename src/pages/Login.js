import { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import FormClientLogin from '../components/FormClientLogin';
import { GlobalContext } from '../provider/Provider';
import { ImageBg } from '../styled-components/ImageBg';
import { Section } from '../styled-components/Section';

export default function Login() {
  const { client } = useContext(GlobalContext);
  
  if (client) return <Redirect to='/' />;

  return (
    <Section login>
      <ImageBg aria-label='background login page' />
      <FormClientLogin />
      <Link to='/register'>Register</Link>
    </Section>
  );
}
