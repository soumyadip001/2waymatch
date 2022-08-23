import { useRouter } from 'next/router'
import { getAuth, signOut } from 'firebase/auth'

export default function ButtonLogout() {

  const auth = getAuth()
  const router = useRouter()

  const logout = async () => {
    try {
      await signOut(auth)
      router.push('/login')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <button
      className='group inline-flex items-center justify-center rounded-md py-2 px-4 text-sm font-semibold border-2 bg-red-900 border-red-900 text-red-100'
      type={'button'}
      onClick={logout}
    >
      Logout
    </button>
  )
}
