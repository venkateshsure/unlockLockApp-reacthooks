// Write your code here

import {useState} from 'react'

import {Container, Image, Para, Button} from './styledComponents'

const Unlock = () => {
  const [state, setState] = useState(false)

  const onClickButton = () => {
    setState(preState => !preState)
  }
  return (
    <Container>
      {state ? (
        <Image
          alt="unlock"
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
        />
      ) : (
        <Image
          alt="lock"
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
        />
      )}
      <Para>{state ? 'Your Device is Unlocked' : 'Your Device is Locked'}</Para>
      <Button onClick={onClickButton}>{state ? 'Lock' : 'Unlock'}</Button>
    </Container>
  )
}

export default Unlock
