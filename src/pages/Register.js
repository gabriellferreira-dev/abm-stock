import { Link } from 'react-router-dom';
import FormClientRegister from '../components/FormClientRegister';
import { ImageBg } from '../styled-components/ImageBg';
import { Section } from '../styled-components/Section';

export default function Login() {
  return (
    <Section login>
      <ImageBg aria-label='background register page' />
      <FormClientRegister />
      <Link to='/login'>Login</Link>
    </Section>
  );
}
