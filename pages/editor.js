import { React, useEffect, useRef, useState } from 'react'
import { useSession, getSession, signIn } from 'next-auth/react'
import LnTypo from '../components/LnTypo'
import { Button } from '@mui/material'

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  return {
    props: { session, },
  }
}

export default function BlogEditor() {
  const { data: session, status, } = useSession()

  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, //Added .CKEditor
      ClassicEditor: require('../ckeditor5/build/ckeditor'),
    }
    setEditorLoaded(true)
  }, [])

  const [data, setData] = useState('')

  if (session && status === 'authenticated') {
    return (
      <>
        {editorLoaded ?
          <CKEditor
            editor={ClassicEditor}
            data={data}
            onChange={(event, editor) => {
              const content = editor.getData()
              setData(content)
            }}
          /> : <p>Cargando...</p>}
      </>
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
