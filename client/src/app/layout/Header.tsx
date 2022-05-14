import { AppBar, Switch, Toolbar, Typography } from '@mui/material'
import React from 'react'

interface Props {
  paletteModeHandler: () => void;
}

export default function Header({ paletteModeHandler }: Props) {
  return (
    <AppBar position='static' sx={{ mb: 4 }}>
        <Toolbar>
            <Typography variant="h6">
                RE-STORE
            </Typography>
            <Switch onClick={paletteModeHandler} />
        </Toolbar>
    </AppBar>
  )
}
