import { Row, Col } from "react-bootstrap";

export default function Hero() {
    return (
        <div>
            <Row className="flex items-center w-11/12 mx-auto"> {/* Centering the row */}
                <Col lg={4} className=""> 
                    {/* Content for the first column */}
                    <h1>Hello</h1>
                </Col>
                <Col lg={8}>
                    <h1>Hello</h1>
                </Col>
            </Row>
        </div>
    );
}
