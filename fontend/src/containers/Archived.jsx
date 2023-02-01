import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import CardArchived from '../components/CardArchived'

const Archived = () => {
  return (
    <Container fluid>
      <Header navi='/' button='News View' />
      <h1 className='shadow p-3 mt-4 mb-5 text-center text-secondary'>
        Allfunds Archived
      </h1>
      <CardArchived />
    </Container>
  )
}

export default Archived
