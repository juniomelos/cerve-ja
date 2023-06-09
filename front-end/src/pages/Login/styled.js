import styled from 'styled-components';

export const Container = styled.section`
  align-items: center;
  display: flex;
  height: 100vh ;
  justify-content: center;
`;

export const Image = styled.div`
  
`;

export const Forms = styled.form`
  background: #D3D3D3;
  border: 7px solid #EAF1EF;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 480px;
  left: 750px;
  padding: 12px 24px;
  top: 501px;
  width: 425px;  
`;

export const ButtonLogin = styled.button`
  background: orange;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 18px;
  justify-content: center;
  margin: 12px auto;
  padding: 18px;
  text-transform: uppercase;
  width: 90%;
`;

export const ButtonRegister = styled.button`
  background: transparent;
  border: solid 3px orange;
  border-radius: 8px;
  color: orange;
  cursor: pointer;
  display: flex;
  font-size: 18px;
  justify-content: center;
  margin: 12px auto;
  padding: 18px;
  text-transform: uppercase;
  transition: 0ms.3s ease-in-out;
  width: 90%;
&:hover {
  background-color: #036B52;
  color: white;
}
  
`;
