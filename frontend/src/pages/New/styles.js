import styled from 'styled-components';

export const Label = styled.label`
  margin-bottom: 20px;
  border: 1px dashed #ddd;
  background-size: cover;
  cursor: pointer;
  height: 160px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${(props) =>
    props.preview ? `url(${props.preview})` : null};

  border: ${(props) => (props.preview ? 0 : null)};

  img {
    display: ${(props) => (props.preview ? 'none' : null)};
  }
  input {
    display: none;
  }
`;
