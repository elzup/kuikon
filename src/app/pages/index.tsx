import { useState, useEffect } from 'react'
import { Button, Input } from '@material-ui/core'
import firebase from 'firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import { initializeFirebase } from '../service/firebase'
import App from '../components/App'
import 'firebase/firestore'

const userId = 'OegHtdhSLTtslN2L3YJn'

initializeFirebase()
const fdb = firebase.firestore()

function Home() {
  const [text, setText] = useState<string>('')
  const [actions, loading, error] = useCollection(
    fdb
      .collection('user')
      .doc(userId)
      .collection('actions')
  )

  console.log(actions?.docs)

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
