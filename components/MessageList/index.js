import React from 'react'
import { Divider, Grid, Stack } from '@mui/material'
import LnTypo from '../LnTypo'

function dateHelper(isoString, time) {
  if (time) return `${isoString.substr(8, 2)}/${isoString.substr(5, 2)}/${isoString.substr(0, 4)} - ${isoString.substr(11, 5)}`
  return `${isoString.substr(8, 2)}/${isoString.substr(5, 2)}/${isoString.substr(0, 4)}`
}


export default function MessageList(props) {

  return (
    <>
      <Grid container direction='column' display='flex' alignItems='center' my={2}>
        <Grid container>
          <Grid item display='flex' justifyContent='center' xs={3}>
            <LnTypo variant='h6' weight='800'>
              Remitente
            </LnTypo>
          </Grid>
          <Grid item display='flex' justifyContent='center' xs={2}>
            <LnTypo variant='h6' weight='800'>
              Fecha
            </LnTypo>
          </Grid>
          <Grid item display='flex' justifyContent='center' xs={7}>
            <LnTypo variant='h6' weight='800'>
              Mensaje
            </LnTypo>
          </Grid>

        </Grid>
        {props.props.messages?.map((message) => (
          <>
            <Divider width='100%' />
            <Grid item display='block'>
              <Divider />
            </Grid>
            <Grid container alignItems='center' my={3} spacing={2}>
              <Grid item xs={3} display='flex' justifyContent='flex-start'>
                <Stack spacing={1}>
                  <LnTypo variant='h6' weight='600'>
                    {message.name}
                  </LnTypo>
                  <LnTypo variant='subtitle'>
                    {message.phone}, {message.email}, {message.city}, {message.country}
                  </LnTypo>
                </Stack>
              </Grid>
              <Grid item xs={2} display='flex' justifyContent='center'>
                <LnTypo variant='subtitle'>
                  {dateHelper(message.createdAt, false)}
                </LnTypo>
              </Grid>
              <Grid item xs={7} display='flex' justifyContent='center'>
                <LnTypo variant='body'>
                  {message.content}
                </LnTypo>
              </Grid>
            </Grid>
          </>
        ))
        }
      </Grid>
    </>)
}

