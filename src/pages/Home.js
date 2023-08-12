import { Row, Col, Card } from 'react-bootstrap';
import Header from './Header';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Header />
            <Box component="main" className='mt-5 pt-5' sx={{ flexGrow: 1, p: 3 }}  >
                <Row>
                    <div className='h2 py-2 fw-bolder pl-1'>Dashboard</div>
                    {[
                        'Info',
                        'Warning',
                        'Success',
                        'Danger',
                    ].map((variant, index) => (
                        <Col key={index}>
                            <Card
                                bg={variant.toLowerCase()}
                                key={variant}
                                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                className="mb-2"
                            >
                                <Card.Header>Header</Card.Header>
                                <Card.Body>
                                    <Card.Title>{variant} Card Title </Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Box>
        </Box>
    );
}

export default Home;