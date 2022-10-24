import { React, useState, useRef, useEffect } from 'react'
import { useSession, getSession, } from 'next-auth/react'

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  return {
    props: { session, },
  }
}

export default function Editor() {
  let editorRef = useRef()
  const { CKEditor, ClassicEditor } = editorRef.current || {}
  const { data: session, status } = useSession()

  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState('')

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    }

    setLoaded(true)
  }, [])


  if (loaded && session && status === 'authenticated') {
    return (<>
      <CKEditor
        editor={ClassicEditor}
        data="<h1>Título del post</h1>"
        onChange={(event, editor) => {
          setData(editor.getData())
        }}
      />
      {data}</>
    )
  }
}
