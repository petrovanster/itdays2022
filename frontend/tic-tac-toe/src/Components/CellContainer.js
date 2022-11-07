import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


function renderCell(cellValue) {
    switch (cellValue) {
        case 1:
            return 'X';
        case 2:
            return 'O';
        default:
            return '-';
    }
}


const CellContainer = (props) => {
    return <>
        <Table>
            {
                props.board.map((row, rowIndex) => (
                    <tr>
                        <td>
                            {
                                row.map((cell, colIndex) => (
                                    <Button onClick={() => { props.onTurn(rowIndex, colIndex) }}>
                                        {
                                            renderCell(cell)
                                        }
                                    </Button>
                                ))
                            }
                        </td>
                    </tr>
                ))
            }
        </Table>
    </>
}

export default CellContainer;