import {useState} from 'react'
import {
  BgContainer,
  CardContainer,
  PageHeading,
  CardBgContainer,
  CardNumber,
  TextInfo,
  CardHolderName,
  InputsContainer,
  FormContainer,
  FormName,
  CardNumInput,
  CardHolderNameInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardNum, setCardNum] = useState('')
  const [holderName, setHolderName] = useState('')
  const handleNumInput = e => {
    setCardNum(e.target.value)
  }
  const handleNameInput = e => {
    setHolderName(e.target.value)
  }

  return (
    <BgContainer>
      <CardContainer>
        <PageHeading>CREDIT CARD</PageHeading>
        <CardBgContainer data-testid="creditCard">
          <CardNumber>{cardNum}</CardNumber>
          <TextInfo>CARDHOLDER NAME</TextInfo>
          <CardHolderName>{holderName}</CardHolderName>
        </CardBgContainer>
      </CardContainer>
      <InputsContainer>
        <FormContainer>
          <FormName>Payment Method</FormName>
          <CardNumInput
            type="text"
            onChange={handleNumInput}
            placeholder="Card Number"
          />
          <CardHolderNameInput
            type="text"
            onChange={handleNameInput}
            placeholder="Cardholder Name"
          />
        </FormContainer>
      </InputsContainer>
    </BgContainer>
  )
}

export default CreditCard
