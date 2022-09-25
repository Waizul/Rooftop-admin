import styled from 'styled-components';

export const Container = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 2px;
`
export const Input = styled.input`
height: 50px;
min-width: 250px;
padding: 10px;
`
export const Label = styled.label`
font-size: 12px;
font-weight: 500;
`
export const NoAccount = styled.span`
font-size: 12px;
&>b {
  color: #0071c2;
  cursor: pointer;
}
`
export const Error = styled.span`
color: red;
font-weight: 500;
text-align: center;
`