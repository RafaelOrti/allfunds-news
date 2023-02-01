import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import CardNews from '../components/CardNews'

const News = () => {
  return (
    <Container fluid>
      <Header navi='/archived' button='Archived View' />
      <h1 className='shadow p-3 mt-4 mb-5 text-center text-secondary'>
        Allfunds News
      </h1>
      <CardNews />
    </Container>
  )
}

export default News
