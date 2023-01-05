import { Autocomplete, Box, Button, Checkbox, FormControl, FormControlLabel, TextField, Grid } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'

const StyledTextField = styled(TextField)({
  '& label': {
    color: 'white'
  },
  '&:hover label': {
    fontWeight: 700
  },
  '& label.Mui-focused': {
    color: 'white'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white'
  },
  '& .MuiOutlinedInput-root': {
    color: 'white',
    '& fieldset': {
      borderColor: 'white'
    },
    '&:hover fieldset': {
      borderColor: 'white',
      borderWidth: 2
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white'
    }
  },
  '& svg': {
    color: 'white'
  }
})

export default function ContactForm() {
  async function handleOnSubmit(e) {
    e.preventDefault()

    const formData = {}

    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return
      formData[field.name] = field.value
    })

    await fetch('/api/message', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
  }


  return (
    <div className='formcontainer'>
      <div className="contactform">

        <form method="post" onSubmit={handleOnSubmit}>

          <Grid container spacing={4} sx={{ display: 'flex' }}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <StyledTextField name='name' label='Nombre' />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <Autocomplete
                options={countries}
                autoHighlight
                fullWidth
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=""
                    />
                    {option.label} ({option.code}) +{option.phone}
                  </Box>
                )}
                renderInput={(params) => (
                  <StyledTextField
                    name="country"
                    {...params}
                    label="País"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <StyledTextField name='city' label='Ciudad' />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <StyledTextField name='phone' label='Teléfono' />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <StyledTextField name='email' label='Correo' />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <StyledTextField name='content' label='Consulta' multiline minRows={3} />
              </FormControl>
            </Grid>
            <Grid item xs={10} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <FormControlLabel control={
                <Checkbox sx={{
                  color: 'white',
                  '&.Mui-checked': {
                    color: 'white',
                  },
                }} required />}
              componentsProps={{
                typography: { color: 'white' }
              }}
              label="Eres mayor de edad y aceptas los términos y condiciones"
              />
            </Grid>
            <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Button variant='contained' color='neutral' sx={{ maxHeight: '2.5rem' }} type='submit'>Enviar</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  )

}
//feo, pero si lo muevo a json rompe el autocomplete ¯\_(ツ)_/¯
const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  { code: 'AF', label: 'Afghanistán', phone: '93' },
  { code: 'AL', label: 'Albania', phone: '355' },
  { code: 'AM', label: 'Armenia', phone: '374' },
  { code: 'AO', label: 'Angola', phone: '244' },
  { code: 'AR', label: 'Argentina', phone: '54' },
  { code: 'AT', label: 'Austria', phone: '43' },
  {
    code: 'AU',
    label: 'Australia',
    phone: '61',
  },
  { code: 'AW', label: 'Aruba', phone: '297' },
  { code: 'AZ', label: 'Azerbaiyán', phone: '994' },
  {
    code: 'BA',
    label: 'Bosnia y Herzegovina',
    phone: '387',
  },
  { code: 'BD', label: 'Bangladés', phone: '880' },
  { code: 'BE', label: 'Bélgica', phone: '32' },
  { code: 'BF', label: 'Burkina Faso', phone: '226' },
  { code: 'BG', label: 'Bulgaria', phone: '359' },
  { code: 'BH', label: 'Baréin', phone: '973' },
  { code: 'BI', label: 'Burundi', phone: '257' },
  { code: 'BJ', label: 'Benín', phone: '229' },
  { code: 'BO', label: 'Bolivia', phone: '591' },
  { code: 'BR', label: 'Brasil', phone: '55' },
  { code: 'BT', label: 'Bután', phone: '975' },
  { code: 'BV', label: 'Bouvet Isla', phone: '47' },
  { code: 'BW', label: 'Botsuana', phone: '267' },
  { code: 'BY', label: 'Bielorrusia', phone: '375' },
  { code: 'BZ', label: 'Belice', phone: '501' },
  {
    code: 'CA',
    label: 'Canadá',
    phone: '1',
  },
  {
    code: 'CD',
    label: 'República Democrática del Congo',
    phone: '243',
  },
  {
    code: 'CF',
    label: 'República Centroafricana',
    phone: '236',
  },
  {
    code: 'CG',
    label: 'República del Congo',
    phone: '242',
  },
  { code: 'CH', label: 'Suiza', phone: '41' },
  { code: 'CI', label: 'Costa de Marfil', phone: '225' },
  { code: 'CK', label: 'Islas Cook', phone: '682' },
  { code: 'CL', label: 'Chile', phone: '56' },
  { code: 'CM', label: 'Camerún', phone: '237' },
  { code: 'CN', label: 'China', phone: '86' },
  { code: 'CO', label: 'Colombia', phone: '57' },
  { code: 'CR', label: 'Costa Rica', phone: '506' },
  { code: 'CU', label: 'Cuba', phone: '53' },
  { code: 'CV', label: 'Cabo Verde', phone: '238' },
  { code: 'CY', label: 'Chipre', phone: '357' },
  { code: 'CZ', label: 'República Checa', phone: '420' },
  {
    code: 'DE',
    label: 'Alemania',
    phone: '49',
  },
  { code: 'DJ', label: 'Yibuti', phone: '253' },
  { code: 'DK', label: 'Dinamarca', phone: '45' },
  {
    code: 'DO',
    label: 'Dominican Republic',
    phone: '1-809',
  },
  { code: 'DZ', label: 'Algeria', phone: '213' },
  { code: 'EC', label: 'Ecuador', phone: '593' },
  {
    code: 'AE',
    label: 'Emiratos Árabes Unidos',
    phone: '971',
  },
  { code: 'EE', label: 'Estonia', phone: '372' },
  { code: 'EG', label: 'Egipto', phone: '20' },
  { code: 'EH', label: 'Western Sahara', phone: '212' },
  { code: 'ER', label: 'Eritrea', phone: '291' },
  { code: 'ES', label: 'España', phone: '34' },
  { code: 'ET', label: 'Etiopía', phone: '251' },
  { code: 'FI', label: 'Finlandia', phone: '358' },
  { code: 'FJ', label: 'Fiyi', phone: '679' },
  {
    code: 'FM',
    label: 'Micronesia',
    phone: '691',
  },
  {
    code: 'FR',
    label: 'Francia',
    phone: '33',
  },
  { code: 'GA', label: 'Gabón', phone: '241' },
  { code: 'GB', label: 'Reino Unido', phone: '44' },
  { code: 'GE', label: 'Georgia', phone: '995' },
  { code: 'GF', label: 'Guyana Francesa', phone: '594' },
  { code: 'GH', label: 'Ghana', phone: '233' },
  { code: 'GI', label: 'Gibraltar', phone: '350' },
  { code: 'GL', label: 'Groenlandia', phone: '299' },
  { code: 'GM', label: 'Gambia', phone: '220' },
  { code: 'GN', label: 'Guinea', phone: '224' },
  { code: 'GQ', label: 'Guinea Ecuatorial', phone: '240' },
  { code: 'GR', label: 'Grecia', phone: '30' },
  { code: 'GT', label: 'Guatemala', phone: '502' },
  { code: 'GW', label: 'Guinea-Bisáu', phone: '245' },
  { code: 'GY', label: 'Guyana', phone: '592' },
  { code: 'HK', label: 'Hong Kong', phone: '852' },
  { code: 'HN', label: 'Honduras', phone: '504' },
  { code: 'HR', label: 'Croacia', phone: '385' },
  { code: 'HT', label: 'Haití', phone: '509' },
  { code: 'HU', label: 'Hungría', phone: '36' },
  { code: 'ID', label: 'Indonesia', phone: '62' },
  { code: 'IE', label: 'Irlanda', phone: '353' },
  { code: 'IL', label: 'Israel', phone: '972' },
  { code: 'IM', label: 'Isle of Man', phone: '44' },
  { code: 'IN', label: 'India', phone: '91' },
  { code: 'IQ', label: 'Iráq', phone: '964' },
  {
    code: 'IR',
    label: 'Irán',
    phone: '98',
  },
  { code: 'IS', label: 'Islandia', phone: '354' },
  { code: 'IT', label: 'Italia', phone: '39' },
  { code: 'JM', label: 'Jamaica', phone: '1-876' },
  { code: 'JO', label: 'Jordania', phone: '962' },
  {
    code: 'JP',
    label: 'Japón',
    phone: '81',
  },
  { code: 'KE', label: 'Kenia', phone: '254' },
  { code: 'KG', label: 'Kirguistán', phone: '996' },
  { code: 'KH', label: 'Camboya', phone: '855' },
  { code: 'KI', label: 'Kiribati', phone: '686' },
  { code: 'KR', label: 'Korea del sur', phone: '82' },
  { code: 'KW', label: 'Kuwait', phone: '965' },
  { code: 'KY', label: 'Islas Caimán', phone: '1-345' },
  { code: 'KZ', label: 'Kazajistán', phone: '7' },
  { code: 'LB', label: 'Líbano', phone: '961' },
  { code: 'LI', label: 'Liechtenstein', phone: '423' },
  { code: 'LK', label: 'Sri Lanka', phone: '94' },
  { code: 'LR', label: 'Liberia', phone: '231' },
  { code: 'LS', label: 'Lesotho', phone: '266' },
  { code: 'LT', label: 'Lituania', phone: '370' },
  { code: 'LU', label: 'Luxemburgo', phone: '352' },
  { code: 'LV', label: 'Letonia', phone: '371' },
  { code: 'LY', label: 'Libia', phone: '218' },
  { code: 'MA', label: 'Marruecos', phone: '212' },
  { code: 'MC', label: 'Mónaco', phone: '377' },
  {
    code: 'MD',
    label: 'Moldavia',
    phone: '373',
  },
  { code: 'ME', label: 'Montenegro', phone: '382' },
  { code: 'MG', label: 'Madagascar', phone: '261' },
  { code: 'MH', label: 'Islas Marshall', phone: '692' },
  {
    code: 'MK',
    label: 'Macedonia',
    phone: '389',
  },
  { code: 'ML', label: 'Mali', phone: '223' },
  { code: 'MM', label: 'Myanmar', phone: '95' },
  { code: 'MN', label: 'Mongolia', phone: '976' },
  { code: 'MO', label: 'Macao', phone: '853' },
  { code: 'MR', label: 'Mauritania', phone: '222' },
  { code: 'MT', label: 'Malta', phone: '356' },
  { code: 'MU', label: 'Mauricio', phone: '230' },
  { code: 'MW', label: 'Malaui', phone: '265' },
  { code: 'MX', label: 'México', phone: '52' },
  { code: 'MY', label: 'Malaysia', phone: '60' },
  { code: 'MZ', label: 'Mozambique', phone: '258' },
  { code: 'NA', label: 'Namibia', phone: '264' },
  { code: 'NE', label: 'Níger', phone: '227' },
  { code: 'NG', label: 'Nigeria', phone: '234' },
  { code: 'NI', label: 'Nicaragua', phone: '505' },
  { code: 'NL', label: 'Países Bajos', phone: '31' },
  { code: 'NO', label: 'Noruega', phone: '47' },
  { code: 'NP', label: 'Nepal', phone: '977' },
  { code: 'NZ', label: 'Nueva Zelanda', phone: '64' },
  { code: 'OM', label: 'Omán', phone: '968' },
  { code: 'PA', label: 'Panamá', phone: '507' },
  { code: 'PE', label: 'Perú', phone: '51' },
  { code: 'PG', label: 'Papúa Nueva Guinea', phone: '675' },
  { code: 'PH', label: 'Filipinas', phone: '63' },
  { code: 'PK', label: 'Pakistán', phone: '92' },
  { code: 'PL', label: 'Polonia', phone: '48' },
  { code: 'PR', label: 'Puerto Rico', phone: '1' },
  {
    code: 'PS',
    label: 'Palestina',
    phone: '970',
  },
  { code: 'PT', label: 'Portugal', phone: '351' },
  { code: 'PY', label: 'Paraguay', phone: '595' },
  { code: 'QA', label: 'Catar', phone: '974' },
  { code: 'RO', label: 'Romania', phone: '40' },
  { code: 'RS', label: 'Serbia', phone: '381' },
  { code: 'RU', label: 'Rusia', phone: '7' },
  { code: 'RW', label: 'Ruanda', phone: '250' },
  { code: 'SA', label: 'Arabia Saudita', phone: '966' },
  { code: 'SC', label: 'Seychelles', phone: '248' },
  { code: 'SD', label: 'Sudán', phone: '249' },
  { code: 'SE', label: 'Suecia', phone: '46' },
  { code: 'SG', label: 'Singapur', phone: '65' },
  { code: 'SI', label: 'Eslovenia', phone: '386' },
  { code: 'SK', label: 'Eslovaquia', phone: '421' },
  { code: 'SL', label: 'Sierra Leona', phone: '232' },
  { code: 'SM', label: 'San Marino', phone: '378' },
  { code: 'SN', label: 'Senegal', phone: '221' },
  { code: 'SO', label: 'Somalia', phone: '252' },
  { code: 'SR', label: 'Surinam', phone: '597' },
  { code: 'SS', label: 'Sudán del sur', phone: '211' },
  { code: 'SV', label: 'El Salvador', phone: '503' },
  {
    code: 'SY',
    label: 'Syria',
    phone: '963',
  },
  { code: 'SZ', label: 'Suazilandia', phone: '268' },
  { code: 'TD', label: 'Chad', phone: '235' },
  { code: 'TG', label: 'Togo', phone: '228' },
  { code: 'TH', label: 'Tailandia', phone: '66' },
  { code: 'TJ', label: 'Tayikistán', phone: '992' },
  { code: 'TM', label: 'Turkmenistán', phone: '993' },
  { code: 'TN', label: 'Túnez', phone: '216' },
  { code: 'TO', label: 'Tonga', phone: '676' },
  { code: 'TR', label: 'Turquía', phone: '90' },
  {
    code: 'TT',
    label: 'Trinidad y Tobago',
    phone: '1-868',
  },
  { code: 'TV', label: 'Tuvalu', phone: '688' },
  {
    code: 'TW',
    label: 'Taiwan',
    phone: '886',
  },
  {
    code: 'TZ',
    label: 'Tanzania',
    phone: '255',
  },
  { code: 'UA', label: 'Ucrania', phone: '380' },
  { code: 'UG', label: 'Uganda', phone: '256' },
  {
    code: 'US',
    label: 'Estados Unidos',
    phone: '1',
  },
  { code: 'UY', label: 'Uruguay', phone: '598' },
  { code: 'UZ', label: 'Uzbekistán', phone: '998' },
  { code: 'VE', label: 'Venezuela', phone: '58' },
  { code: 'VN', label: 'Vietnam', phone: '84' },
  { code: 'VU', label: 'Vanuatu', phone: '678' },
  { code: 'WS', label: 'Samoa', phone: '685' },
  { code: 'XK', label: 'Kosovo', phone: '383' },
  { code: 'YE', label: 'Yemen', phone: '967' },
  { code: 'ZA', label: 'Sudáfrica', phone: '27' },
  { code: 'ZM', label: 'Zambia', phone: '260' },
  { code: 'ZW', label: 'Zimbabue', phone: '263' },
]
