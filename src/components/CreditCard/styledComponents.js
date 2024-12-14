import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #3b4b69, #344e7a);
  align-items: center;
  height: 60vh;
  padding: 20px;
  @media (min-width: 768px) {
    height: 100vh;
    padding: 10px;
    width: 50vw;
  }
`
export const PageHeading = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  border-bottom: 4px solid #ffd773;
  padding-bottom: 8px;
  color: #fff;
`
export const CardBgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 360px;
  height: 220px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  @media (min-width: 768px) {
    margin-top: 25%;
  }
`
export const CardNumber = styled.p`
  color: #fff;
  margin-top: auto;
  font-size: 20px;
`

export const TextInfo = styled.p`
  color: #c3cad9;
  margin-bottom: 0px;
  font-size: 13px;
`
export const CardHolderName = styled.p`
  color: #fff;
  height: 13px;
  margin-top: 3px;
  font-size: 16px;
`

export const InputsContainer = styled.div`
  @media (max-width: 768px) {
    height: 40vh;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 10px #d3d9e0;
  padding: 30px 25px;
  width: 330px;
`
export const FormName = styled.h1`
  margin-bottom: 25px;
  margin-top: 0px;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  border-radius: 15px;
  color: : #475569;
`

export const CardNumInput = styled.input`
  margin-bottom: 20px;
  padding: 5px 15px;
  outline: none;
  border: 2px solid #c3cad9;
  border-radius: 3px;
  font-size: 15px;
  color: #475569;
`
export const CardHolderNameInput = styled.input`
  padding: 5px 15px;
  outline: none;
  border: 2px solid #c3cad9;
  border-radius: 3px;
  font-size: 15px;
  color: #475569;
`
