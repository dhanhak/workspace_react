import './App.css';
import { Button, Col, Container, Row, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import TopNavi from './Conponents/TopNavi/TopNavi';
import Main from './pages/Main/Main';

function App() {
  return (
    <>
      <TopNavi></TopNavi>
      <Container fluid style={{ marginTop: "58px" }}>
        <Main></Main>
      </Container>
    </>
  );
}

export default App;
