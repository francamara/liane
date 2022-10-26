import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import debounce from 'lodash/debounce'
import { Box, Divider, FormControlLabel, FormGroup, Grid, IconButton, List, ListItem, Switch } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import LnTypo from '../LnTypo'

function dateHelper(isoString, time) {
  if (time) return `${isoString.substr(8, 2)}/${isoString.substr(5, 2)}/${isoString.substr(0, 4)} - ${isoString.substr(11, 5)}`
  return `${isoString.substr(8, 2)}/${isoString.substr(5, 2)}/${isoString.substr(0, 4)}`
}

async function publishPost(id) {
  await fetch(`/api/post/publish/${id}`, {
    method: 'PUT',
  })
  await Router.push('/dash')
}

async function unpublishPost(id) {
  await fetch(`/api/post/unpublish/${id}`, {
    method: 'PUT',
  })
  await Router.push('/dash')
}

async function deletePost(id) {
  if (window.confirm('¿Realmente deseas borrar este post?')) {
    await fetch(`/api/post/delete/${id}`, {
      method: 'DELETE',
    })
    await Router.push('/dash')
  }
}

export default function PostsList(props) {

  //se Para no saturar la api con publish/unpublish
  const debouncedOnChange = debounce(handlePublishUnpublish, 200)

  function handlePublishUnpublish(post) {
    if (post.published) {
      unpublishPost(post.id)
      return
    }
    publishPost(post.id)
  }

  return (
    <>
      <List sx={{ p: 2, flexGrow: 1, }}>
        <Grid container columns={{ xs: 9, md: 12 }} display='flex' alignItems='center' my={2}>
          <ListItem>
            <Grid item display='flex' justifyContent='center' xs={4}>
              <LnTypo variant='h6' weight='800'>
                Titulo
              </LnTypo>
            </Grid>
            <Grid item display='flex' justifyContent='center' xs={2}>
              <LnTypo variant='h6' weight='800'>
                Creado
              </LnTypo>
            </Grid>
            <Grid item display='flex' justifyContent='center' xs={3}>
              <LnTypo variant='h6' weight='800'>
                Actualizado
              </LnTypo>
            </Grid>
            <Grid item display='flex' justifyContent='center' xs={1}>
              <LnTypo variant='h7' weight='800'>
                Publicado
              </LnTypo>
            </Grid>
            <Grid item display='flex' justifyContent='center' xs={2}>
            </Grid>

          </ListItem>
          {props.props.posts?.map((post, i) => (
            <Box key={i} flex={1}>
              <ListItem>
                <Grid item xs={4} display='flex' justifyContent='flex-start'>
                  <LnTypo variant='h4' weight='600'>
                    {post.title}
                  </LnTypo>
                </Grid>
                <Grid item xs={2} display='flex' justifyContent='center'>
                  <LnTypo variant='subtitle'>
                    {dateHelper(post.createdAt, false)}
                  </LnTypo>
                </Grid>
                <Grid item xs={3} display='flex' justifyContent='center'>
                  <LnTypo variant='subtitle'>
                    {dateHelper(post.updatedAt, true)}
                  </LnTypo>
                </Grid>

                <Grid item xs={1}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch checked={post.published} size='small'
                          onClick={(event) => {
                            event.target.checked = true
                            debouncedOnChange(post)
                          }} />}
                      label={post.publishedAt ? dateHelper(post.publishedAt, false) : ''}
                      labelPlacement='bottom' />
                  </FormGroup>
                </Grid >

                <Grid item display='flex' justifyContent='center' xs={1}>
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
              </ListItem>
              <Divider />
            </Box>
          ))
          }
        </Grid>
      </List >
    </>)
}

