// Dependencies
import * as React from 'react';
import classnames from 'classnames';
// Styled
import {
  Wrapper,
  Button,
  Content,
  Image,
  Header,
  User,
  ImageContainer,
  UserData,
  UserName,
  UserAvailability,
  UserList,
} from './WhatsappStyle';
// Props
import { WhatsappProps, defaultProps } from './WhatsappProps';

const Whatsapp = (props:WhatsappProps) => {
  const componentProps = { ...defaultProps, ...props };
  const { onClick, opened, users } = componentProps;

  const handleOpen = () => {
    if (typeof onClick === 'function') {
      onClick(!opened);
    }
  };

  const handleClick = (phone: string, message = '') => () => {
    const link = document.createElement('a');
    const body = document.getElementsByTagName('body')[0];
    link.setAttribute('target', '_blank');
    link.setAttribute('href', `https://wa.me/${ phone }?text=${ message }`);
    body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <Wrapper>
      { opened && users.length > 0 &&
        <Content>
          <Header>
            Nuestro equipo de atención al cliente está disponible
            para responder a tus preguntas. ¡Consultanos!
          </Header>
          <UserList>
            { users.map(user =>
              <User
                classes={ classnames({ multiple: users.length > 1 }) }
                key={ user.id }
                onClick={ handleClick(user.phone, user.text) }
              >
                <ImageContainer>
                  <Image source={ user.image } />
                </ImageContainer>
                <UserData>
                  <UserName>{ user.name }</UserName>
                  <UserAvailability>{ user.availability }</UserAvailability>
                </UserData>
              </User>,
            )}
          </UserList>
        </Content>
      }

      <Button onClick={ handleOpen }>
        <i className="fab fa-whatsapp fa-4x"></i>
      </Button>
    </Wrapper>
  );
};

export { Whatsapp };
