import { Link } from 'react-router-dom';
import FormClientLogin from '../components/FormClientLogin';
import { ImageBg } from '../styled-components/ImageBg';
import { Section } from '../styled-components/Section';

export default function Login() {
  return (
    <Section login>
      <ImageBg aria-label='background login page' />
      <FormClientLogin />
      <Link to='/register'>Register</Link>
    </Section>
  );
}
