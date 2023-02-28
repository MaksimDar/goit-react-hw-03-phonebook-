import styled from 'styled-components';

const ContactForm = styled.form`
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;
  background-color: #ffebcd;

  border: 2px solid orange;
  border-radius: 4px;
`;
const Span = styled.span`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;
  color: red;
`;

const Label = styled.label`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const AddContactButton = styled.button`
  width: 140px;
  height: 60px;
  text-align: center;
  border-radius: 4px;
  background-color: #ffffe0;
  color: #ff4500;
  font-size: 20px;
  line-height: 1.5;
`;
export { ContactForm, Label, Span, AddContactButton };
