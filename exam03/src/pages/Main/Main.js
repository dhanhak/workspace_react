import { Button, Col, Container, Row, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import PhotoCard from './PhotoCard1/PhotoCard1';




const Main = () => {
    return (
        <Row>
            <Col xs="12" sm="9">
                <Row>
                    <Col xs="12" sm="6" md="4">
                        <PhotoCard random="1"></PhotoCard>
                    </Col>
                    <Col xs="12" sm="6" md="4">
                        <PhotoCard random="2"></PhotoCard>
                    </Col>
                    <Col xs="12" sm="6" md="4">
                        <PhotoCard random="3"></PhotoCard>
                    </Col>
                    <Col xs="12" sm="6" md="4">
                        <PhotoCard random="4"></PhotoCard>
                    </Col>
                </Row>
            </Col>
            <Col xs="12" sm="3">
                Test2
            </Col>
        </Row>
    );
}

export default Main;