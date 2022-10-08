import styled from 'styled-components';

export const Title = styled.section`
  border: 1px solid white;
  padding: 10px;

  h1 {
    padding: 4px 0px;
    font-size: 40px;
  }
  h2 {
    padding: 4px 0px;
  }
  h3 {
    padding: 4px 0px;
  }
`;

export const ContainerEp = styled.section`
  margin-top: 120px;
  display: flex;
  justify-content: center;
  font-size: 23px;
  margin-bottom: 10px;

  h2 {
    display: flex;
    justify-content: center;
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

export const Comentario = styled.form`
  margin-top: 120px;
  display: block;

  h2 {
    padding: 5px 0px;
    font-size: 30px;
  }

  select {
    width: 60px;
    padding: 5px 0px;
    border-radius: 5px;
  }

  textarea {
    width: 50%;
    padding: 5px 0px;
    height: 100px;
  }
`;

export const ContainerComentarios = styled.section`
  margin-top: 40px;
  display: block;
`;
