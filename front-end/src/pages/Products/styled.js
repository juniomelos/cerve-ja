import styled from 'styled-components';

export const ButtonCart = styled.button`
  background: orange;
  border-radius: 8px;
  box-shadow: 0px 3px 15px 0px rgba(0,0,0,0.71);
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: bold;
  padding: 5px 10px;
  position: fixed;
  top: 10%;
  right: 0.5%;
`;

export const Text = styled.h1`
  color: white;
  font-size: 18px;
  font-weight: bold;
  width: 80px
`;

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 4%;
  margin: auto;
  width: 78%;
`;
