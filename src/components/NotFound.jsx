import { Link } from "react-router-dom";
import { Container,Col,Row } from 'react-bootstrap';

function NotFound() {
    return (
        <Container>
            <Row>
                <Col>

        <div className="error">
            <h2>404 - Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>
                You can always go back to the <Link to="/">homepage</Link>.
            </p>
        </div>
        </Col>
        </Row>
        </Container>
    )
}

export default NotFound;