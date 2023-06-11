import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: orange;
  height: 55px;
`;

export const ProductsButton = styled.button`
  background: #ffc93b;
  border: none;
  color: #001813;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  width: 332px;
  &:hover {
    background: #88A580;
  }
  
`;

export const OrdersButton = styled.button`
  background: orange;
  border: none;
  color: #F2FFFC;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  width: 332px;
  &:hover {
    background: #88A580;
  }
`;

export const User = styled.div`
  align-items: center;
  display: flex;
  background: #00a86b;
  color: #F2FFFC;
  font-weight: bold;
  font-size: 18px;
  justify-content: center;
  margin-left: 30%;
  width: 732px;
`;

export const Logout = styled.button`
  background: #d07684;
  border: none;
  color: #F2FFFC;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  width: 180px;
`;
