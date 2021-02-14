import { MdClose } from 'react-icons/md';

import { Form } from '@unform/web';

import { Container, Content, Background } from '../styles/pages/index';
import Input from '../components/Input/';
import Button from '../components/Button/';

export default function Home() {
  const handleSubmit = (data: object): void => {
    console.log('Data: ', data);
  };

  return (
    <>
      <Container>
        <Background />
        <Content>
          <Form onSubmit={handleSubmit}>
            <section>
              <h1>
                Olá, seja <br /> bem vindo!
              </h1>
              <h3>Para acessar a plataforma, faça o seu login.</h3>
            </section>

            <label>
              <p>E-MAIL</p>
              <Input
                name="email"
                type="email"
                placeholder="user.name@mail.com"
              />
            </label>

            <label>
              <p>SENHA</p>
              <Input name="password" type="password" placeholder="*******" />
            </label>

            <Button>ENTRAR</Button>
          </Form>

          <div>
            <p>Esqueceu seu login ou senha?</p>
            <p>
              Clique <a>aqui</a>
            </p>
          </div>
        </Content>
      </Container>
    </>
  );
}
