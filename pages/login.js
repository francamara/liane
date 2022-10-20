import React from 'react'
import { useSession, getSession, signIn, signOut } from 'next-auth/react'
import LnTypo from '../components/LnTypo'
import { Button } from '@mui/material'

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  return {
    props: { session, },
  }
}

export default function Login() {
  const { data: session, status } = useSession()

  if (status === 'authenticated') {
    return (
      <div>
        <LnTypo variant='body'>Que onda {session.user.name}</LnTypo>
        <Button onClick={() => signOut()}>Cerrar</Button>
      </div>
    )
  } else {
    return (
      <div>
        <LnTypo variant='body'>Quien so?</LnTypo>
        <Button onClick={() => signIn()}>Entrar</Button>
      </div>
    )
  }
}
