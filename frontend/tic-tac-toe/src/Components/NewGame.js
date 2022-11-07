import Button from 'react-bootstrap/Button';

const NewGame = (props) => {
    if (props.game === "playing")
        return;

    return <Button variant="primary" onClick={() => { props.onClick() }}>New Game</Button>
}

export default NewGame