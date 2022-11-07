import Container from "react-bootstrap/esm/Container"
import pjson from "../../package.json"

const Footer = () => {
    console.log(process.env)
    return <Container fluid>
        The Tic Tac Toe App - {pjson.version}{process.env.NODE_ENV === "development" ? "- dev" : ''}
    </Container>
}

export default Footer;