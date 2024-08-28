import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { CssBaseline, Typography } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline/>
      <Typography variant='h5'>Hello from React + Vite + Material UI v6 🚀</Typography>
    </>
  )
}

export default App
