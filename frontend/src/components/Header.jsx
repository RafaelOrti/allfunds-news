import { Container, Navbar, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Header = props => {
  let navigate = useNavigate()

  return (
    <Navbar bg='light' expand='lg' sticky='top'>
      <Container>
        <Navbar.Brand href='/'>
          <img
            src='/allfunds.png'
            width='120'
            height='60'
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
        <Button
          className='justify-content-end'
          variant='secondary'
          onClick={() => navigate(props.navi)}
        >
          {props.button}
        </Button>
      </Container>
    </Navbar>
  )
}

export default Header
