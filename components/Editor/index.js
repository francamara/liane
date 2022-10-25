import React, { useEffect, useRef, useState } from "react"


export default function Editor({ onChange, value }) {
  const editorRef = useRef()
  const { CKEditor, ClassicEditor } = editorRef.current || {}
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
    }

    setLoaded(true)
  }, [])

  return (
    <>
      {loaded ? (
        <CKEditor
          editor={ClassicEditor}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      ) : (
        <div>Cargando...</div>
      )}
    </>
  )
}
