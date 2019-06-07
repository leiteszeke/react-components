// Dependencies
import styledComponents from 'styled-components';

export const Wrapper = styledComponents<any>('div').attrs(props => ({

}))`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  height: 100%;
  padding: 0;
  position: absolute;
  width: 100%;
`;

export const Button = styledComponents<any>('div').attrs(props => ({

}))`
  align-items: center;
  background: green;
  border-radius: 40px;
  bottom: 10px;
  cursor: pointer;
  display: flex;
  height: 80px;
  justify-content: center;
  position: absolute;
  right: 10px;
  width: 80px;
`;

export const Content = styledComponents<any>('div').attrs(props => ({

}))`
  background: #FFFFFF;
  border: 1px solid #EDEDED;
  border-radius: 4px;
  bottom: 100px;
  box-sizing: border-box;
  height: auto;
  position: absolute;
  right: 10px;
  width: 300px;
`;

export const Header = styledComponents<any>('div').attrs(props => ({

}))`
  background: #22C15E;
  box-sizing: border-box;
  color: #FFFFFF;
  font-size: 14px;
  text-align: center;
  padding: 12px;
`;

export const UserList = styledComponents<any>('div').attrs(props => ({

}))`
  padding: 12px 6px;
`;

export const User = styledComponents<any>('div').attrs(props => ({
  className: props.classes,
}))`
  align-items: center;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 60px;
  padding: 0 6px;
  width: 100%;

  &.multiple {
    border-bottom: 1px solid #EDEDED;
    margin-bottom: 4px;
  }

  &:hover {
    background: #EDEDED;
  }
`;

export const ImageContainer = styledComponents<any>('div').attrs(props => ({

}))`
  height: 50px;
  width: 50px;
`;

export const Image = styledComponents<any>('img').attrs(props => ({
  src: props.source,
}))`
  border-radius: 25px;
  height: 50px;
  width: 50px;
`;

export const UserData = styledComponents<any>('div').attrs(props => ({

}))`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding: 0 6px;
`;

export const UserName = styledComponents<any>('p').attrs(props => ({

}))`
  align-items: center;
  display: flex;
  font-size: 18px;
  height: 25px;
  margin: 0;
  padding: 0;
  padding-left: 4px;
  width: 100%;
`;

export const UserAvailability = styledComponents<any>('p').attrs(props => ({

}))`
  align-items: center;
  display: flex;
  font-size: 12px;
  height: 25px;
  margin: 0;
  padding: 0;
  padding-left: 4px;
  width: 100%;
`;
