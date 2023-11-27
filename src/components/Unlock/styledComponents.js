// Style your elements here

import styled from 'styled-components'

export const Container = styled.div`
  background-color: #161617;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
`

export const Para = styled.p`
  font-weight: 'bold';
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
`

export const Button = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  border: 1px solid #06b6d4;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
`
