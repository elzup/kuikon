import { useState, useEffect } from 'react'
import { Button, Input, Typography } from '@material-ui/core'
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
      .collection('users')
      .doc(userId)
      .collection('actions')
  )
  // actions?.docs.map(

  return (
    <div>
      {actions?.docs.map(action => {
        return (
          <div>
            <Typography>{action.data().name}</Typography>
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
      })}
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
