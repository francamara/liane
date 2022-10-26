import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { Button, IconButton, Grid, List, ListItem, Divider } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import LnTypo from '../LnTypo'
import MuiEditableLabel from 'mui-editable-label'

function dateHelper(isoString) {
  return `${isoString.substr(8, 2)}/${isoString.substr(5, 2)}/${isoString.substr(0, 4)} - ${isoString.substr(11, 5)}`
}

async function publishPost(id) {
  await fetch(`/api/post/publish/${id}`, {
    method: 'PUT',
  })
  await Router.push('/dash')
}

async function deletePost(id) {
  await fetch(`/api/post/delete/${id}`, {
    method: 'DELETE',
  })
  await Router.push('/dash')
}

async function renamePost(id, title) {
  await fetch(`/api/post/rename/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(title)
  })
}

export default function PostsList(props) {

  return (
    <>
      <List sx={{ p: 2, flexGrow: 1, }}>
        <Grid container columns={12} display='flex' alignItems='center' mt={2} ml={2}>
          <Grid item xs={4}>
            <LnTypo variant='h6' weight='600'>
              Titulo
            </LnTypo>
          </Grid>
          <Grid item xs={2}>
            <LnTypo variant='h6' weight='600'>
              Creado
            </LnTypo>
          </Grid>
          <Grid item xs={2}>
            <LnTypo variant='h6' weight='600'>
              Actualizado
            </LnTypo>
          </Grid>

        </Grid>
        {props.props.posts?.map((post, i) => (
          <div key={i}>
            <ListItem>
              <Grid container columns={{ xs: 8, md: 12 }} display='flex' alignItems='center' my={2}>
                <Grid item xs={4}>
                  <MuiEditableLabel
                    color='#fafafa'
                    initialValue={post.title}
                    onBlur={(value) => {
                      renamePost(post.id, value)
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <LnTypo variant='subtitle'>
                    {dateHelper(post.createdAt)}
                  </LnTypo>
                </Grid>
                <Grid item xs={2}>
                  <LnTypo variant='subtitle'>
                    {dateHelper(post.updatedAt)}
                  </LnTypo>
                </Grid>
                {!post.published ?
                  <Grid item xs={2}>
                    <Button variant='outlined' color='secondary' onClick={() => (publishPost(post.id))} >PUBLICAR</Button>
                  </Grid >
                  :
                  <Grid item xs={2}>
                    <LnTypo variant='subtitle'>
                      {dateHelper(post.publishedAt)}
                    </LnTypo>
                  </Grid >}
                <Grid item display='flex' xs={1}>
                  <Link href={`/editor/${post.id}`} passHref>
                    <IconButton color='success'>
                      <EditIcon />
                    </IconButton>
                  </Link>
                </Grid>
                <Grid item display='flex' justifyContent='flex-end' xs={1}>
                  <IconButton color='error' onClick={() => (deletePost(post.id))}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid >
            </ListItem>
            <Divider />
          </div>
        ))
        }
      </List >
    </>)
}

