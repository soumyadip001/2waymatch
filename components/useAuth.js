import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default function useAuth() {
  
  const auth = getAuth()
  const [user, setUser] = useState('')

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser)
        console.log('firebase user >', firebaseUser)
      } else {
        setUser(null)
      }
    })
  }, [user])
  
  return user
}
