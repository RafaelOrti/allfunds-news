import { Card, Button, Container, Alert, Spinner } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { GetNews, UpdateNews } from '../controllers/newsController'
import moment from 'moment'
import { io } from 'socket.io-client'

const socket = io.connect('http://localhost:4000/socket')

/////TO DO //////
//// create a pagination to make it more efficient (at the moment all the news are requested, which can give long waiting times, a loader has been used)
// 1. use bootstrap pagination
// 2. bring from endpoint only 10 news and map inside a scrollable container
// 3. use hook useState for page number
// 4. if it is 0, only show the next button and not the previous one
// 5. If when bringing the news number it brings a news number lower than the request, disable the next button and keep previous

//// finish decoupling the components
// 1. both cardNews and cardArchived have the same structure it could be reused by creating card component and passing the parameters to it using for example props or a context
// 2. On the other hand, the same thing happens in containers that use the same structure.
// 3. It can be decoupled by buttons and by functions but it would not be necessary due to the size of the project

const CardNews = () => {
  const [storedNews, setStoredNews] = useState([])
  const [loading, setLoading] = useState(true)
  const getstoredNews = async () => {
    try {
      await GetNews(setStoredNews, false)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  socket.on('newThought', () => {
    // setLoading(true)
    getstoredNews()
  })

  useEffect(() => {
    getstoredNews()
  }, [setStoredNews])

  const handleArchiveButton = async report => {
    try {
      await UpdateNews(report._id)
      await GetNews(setStoredNews, false)
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
                Archive
              </Button>
              <Card.Text className='text-secondary  mt-2 text-end'>
                Published at: {moment(report.date).format('DD/MM/YYYY HH:mm')}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <Alert variant='secondary' className='text-center mb-5'>
          Nothing new has happened
        </Alert>
      )}
    </Container>
  )
}

export default CardNews
