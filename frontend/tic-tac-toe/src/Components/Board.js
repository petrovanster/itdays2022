import { useState } from 'react';
import CellContainer from './CellContainer';
import Badge from 'react-bootstrap/Badge';
import NewGame from './NewGame';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const sampleState = [
    [0, 1, 2],
    [1, 0, 2],
    [2, 1, 1]
]

const emptyBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

function buildEmptyBoard() {
    return emptyBoard.map(row => [...row])
}

function computeGameState(board) {
    // rows
    for (let row = 0; row < 3; row++) {
        if (board[row][0] > 0) {
            if ((board[row][0] === board[row][1]) && (board[row][0] === board[row][2])) {
                if (board[row][0] === 1) {
                    return "won1"
                } else {
                    return "won2"
                }
            }
        }
    }
    // cols
    for (let col = 0; col < 3; col++) {
        if (board[0][col] > 0) {
            if ((board[0][col] === board[1][col]) && (board[1][col] === board[2][col])) {
                if (board[0][col] === 1) {
                    return "won1"
                } else {
                    return "won2"
                }
            }
        }
    }
    // diag
    if ((board[0][0] !== 0) && (
        (board[0][0] == board[1][1]) && (board[2][2] == board[1][1])
    )
    ) {
        if (board[0][0] === 1) {
            return "won1"
        } else {
            return "won2"
        }
    }

    if ((board[0][2] !== 0) && (
        (board[0][2] == board[1][1]) && (board[2][0] == board[1][1])
    )
    ) {
        if (board[0][2] === 1) {
            return "won1"
        } else {
            return "won2"
        }
    }
    // tie
    let isTie = true;
    for (let row = 0; row < 3; row++)
        for (let col = 0; col < 3; col++)
            if (board[row][col] === 0)
                isTie = false;
    if (isTie)
        return "tie"
    return 'playing'
}

const Board = (props) => {
    const [board, setBoard] = useState(buildEmptyBoard())
    const [currentPlayer, setCurrentPlayer] = useState(1)
    const [game, setGame] = useState("playing")
    const player1 = props.player1 ? props.player1 : 'Player 1'
    const player2 = props.player2 ? props.player2 : "Player 2"

    const renderBadge = (player) => {
        if (game === "won1") {
            if (player === 1) {
                return <Badge bg="danger">WON</Badge>
            }
            else {
                return;
            }
        }
        if (game === "won2") {
            if (player === 2) {
                return <Badge bg="danger">WON</Badge>
            }
            else {
                return;
            }
        }


        if (game === "tie") {
            return <Badge bg="secondary">Tie</Badge>
        }

        if (currentPlayer === player) {
            return <Badge bg="primary">Turn</Badge>
        }
    }


    const togglePlayer = () => {
        if (currentPlayer === 1)
            setCurrentPlayer(2)
        else
            setCurrentPlayer(1)
    }

    const onPlay = (row, col) => {
        if ((game !== 'playing') || (board[row][col] !== 0))
            return
        board[row][col] = currentPlayer;
        setBoard(board)
        setGame(computeGameState(board))
        togglePlayer()
    }

    const onNewGame = () => {

        setBoard(buildEmptyBoard())
        setCurrentPlayer(1)
        setGame('playing')
    }

    return <>
        <Container>
            <Row>
                <Col>
                    <NewGame game={game} onClick={() => { onNewGame() }} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>{player1} {renderBadge(1)}</div>
                    <div>{player2} {renderBadge(2)}</div>
                </Col>
                <Col>
                    <CellContainer board={board} onTurn={onPlay} />
                </Col>
            </Row>
        </Container>
    </>
}

export default Board;
export { computeGameState }