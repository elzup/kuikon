import { useState, useEffect } from 'react'
import { Button, Input } from '@material-ui/core'
import firebase from 'firebase'
import { initializeFirebase } from '../service/firebase'

import App from '../components/App'
// Required for side-effects
import 'firebase/firestore'

initializeFirebase()
const fdb = firebase.firestore()

function Home() {
  const [text, setText] = useState<string>('')

  useEffect(() => {
    console.log()
  }, [])

  return (
    <div>
      <Input
        value={text}
        onChange={e => {
          setText(e.target.value)
        }}
      ></Input>
      <Button
        onClick={() => {
          console.log('log')
        }}
      >
        記録
      </Button>
    </div>
  )
}

export default () => {
  return (
    <App>
      <Home />
    </App>
  )
}
