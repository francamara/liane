import React from 'react'
import { useSession, getSession, signIn, signOut } from 'next-auth/react'
import { Button } from '@mui/material'

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  return {
    props: { session, },
  }
}

export default function Login() {
  const { data: session, status } = useSession()

  if (session && status === 'authenticated') {
    return (
      <Button mx='5px' onClick={() => signOut()} variant='outlined' color='error'>
        Cerrar sesión
      </Button>
    )
  }
  return (
    <Button mx='5px' onClick={() => signIn()} variant='contained' color='success'>
      Iniciar sesión
    </Button>
  )
}
