import Button from '@mui/material/Button'

interface HomeProps {
  message: string
}

function Home({ message }: HomeProps) {
  return (
    <div>
      <h1>{message}</h1>
      <Button variant="contained">CLICK ME!</Button>
    </div>
  )
}

function Root() {
  return <Home message="SANITY" />
}

export default Root
