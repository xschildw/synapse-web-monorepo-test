import * as React from 'react'
import { HomePageHeaderConfig } from 'types/portal-config'
import { ReactComponent as HeaderImg } from './style/dna_header.svg'
import { ReactComponent as SageLogo } from './style/SageLogo.svg'
import { ReactComponent as DreamLogo } from './style/DreamLogo.svg'
import { Box } from '@mui/material'

const homePageHeader: HomePageHeaderConfig = {
  title: 'Welcome to the Sage Challenge Portal!',
  summary: (
    <>
      {import.meta.env.VITE_PORTAL_DESCRIPTION}
      <Box sx={{marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '30px'}}>
        <DreamLogo /> <SageLogo />
      </Box>
      
    </>
  ),
  showBlur: true,
  HeaderSvg: HeaderImg, // need's to be direct svg import for proper scaling
}

export default homePageHeader
