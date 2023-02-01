import { Card, Button, Container, Alert, Spinner } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { GetNews, DeleteNews } from '../controllers/newsController'
import moment from 'moment'

const CardNews = () => {
  const [storedNews, setStoredNews] = useState([])
  const [loading, setLoading] = useState(true)

  const getstoredNews = async () => {
    try {
      await GetNews(setStoredNews, true)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    getstoredNews()
  }, [setStoredNews])

  const handleArchiveButton = async report => {
    try {
      await DeleteNews(report._id)
      await GetNews(setStoredNews, true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className='overflow-auto'>
      {loading ? (
        <Spinner animation='grow' />
      ) : storedNews?.length > 0 ? (
        storedNews.map((report, i) => (
          <Card className='shadow p-3 mb-3 mt-3' key={i}>
            <Card.Header as='h5'>{report.title}</Card.Header>
            <Card.Body>
              <Card.Title>{report.description}</Card.Title>
              <Card.Text>{report.content}</Card.Text>
              <footer className='blockquote-footer mt-2'>
                Written by: <cite title='Source Title'>{report.author}</cite>
              </footer>
              <Button
                variant='secondary'
                onClick={() => handleArchiveButton(report)}
              >
                Delete
              </Button>
              <Card.Text className='text-secondary  mt-2 text-end'>
                Published at: {moment(report.date).format('DD/MM/YYYY HH:mm')}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <Alert variant='secondary' className='text-center mb-5'>
          Nothing new has archived
        </Alert>
      )}
    </Container>
  )
}

export default CardNews
