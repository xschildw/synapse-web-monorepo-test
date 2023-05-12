import * as React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

const LineGraph = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M5.75482 13.8065C7.97382 13.8065 9.01377 12.0619 9.93631 10.5229C10.8588 8.98391 11.5736 7.93548 12.7741 7.93548C13.9746 7.93548 14.6768 8.96093 15.6119 10.5229C16.5471 12.0848 17.5743 13.8065 19.7934 13.8065H19.9164C20.2638 13.8065 20.5455 13.5248 20.5455 13.1774V13.1774C20.5455 12.83 20.2638 12.5484 19.9164 12.5484H19.7934C18.5928 12.5484 17.8907 11.5229 16.9556 9.96097C16.0204 8.39904 14.9932 6.67742 12.7741 6.67742C10.555 6.67742 9.51515 8.422 8.59262 9.96097C7.67016 11.5 6.95532 12.5484 5.75482 12.5484H5.50413V5.75207C5.50413 5.33671 5.16742 5 4.75207 5V5C4.33671 5 4 5.33671 4 5.75207V17.371C4 17.7182 4.33688 18 4.75207 18H19.9164C20.2638 18 20.5455 17.7184 20.5455 17.371V17.371C20.5455 17.0236 20.2638 16.7419 19.9164 16.7419H5.50413V13.8065H5.75482Z" />
    </SvgIcon>
  )
}

export default LineGraph
