import styled from 'styled-components';

export const Table = styled.table`
  font-size: 20px;

  th {
    border: 2px solid yellow;
    border-radius: 5px;
  }
  td {
    padding: 25px;
    border: 1px solid yellow;
    border-radius: 5px;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  font-size: 50px;
`;

export const ContainerBlock = styled.div`
  display: block;
`;
