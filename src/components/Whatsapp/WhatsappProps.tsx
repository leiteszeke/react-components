export interface MyObject {
  [key: string]: any;
}

export interface WhatsappProps {
  onClick?: Function;
  opened: boolean;
  users: Array<MyObject>;
}

export const defaultProps = {
  opened: false,
  users: [],
};
