import { useState } from "react";


export default function Sudoku() {
    const examplePuzzle = [
        ['.', '.', '.', '4', '.', '.', '.', '3', '.'],
        ['7', '.', '4', '8', '.', '.', '1', '.', '2'],
        ['.', '.', '.', '2', '3', '.', '4', '.', '9'],
        ['.', '4', '.', '5', '.', '9', '.', '8', '.'],
        ['5', '.', '.', '.', '.', '.', '9', '1', '3'],
        ['1', '.', '.', '.', '8', '.', '2', '.', '4'],
        ['.', '.', '.', '.', '.', '.', '3', '4', '5'],
        ['.', '5', '1', '9', '4', '.', '7', '2', '.'],
        ['4', '7', '3', '.', '5', '.', '.', '9', '1']
      ];
    const [puzzle, setPuzzle] = useState<(string | number)[][]>(examplePuzzle);
    const handleInputChange = (rowIndex: number, cellIndex: number, value: string) => {
        if (!value || /^[1-9]$/.test(value) && isValidPlacement(puzzle, rowIndex, cellIndex, value)) {
            const newSudiku = puzzle.map((row, rIndex) => {
                if (rIndex === rowIndex) {
                    return row.map((cell, cIndex) => {
                        if (cIndex === cellIndex) {
                            return value ? parseInt(value, 10) : 0;
                        }
                        return cell;
                    });
                }
                return row;
            });
            setPuzzle(newSudiku);
        }
    }
    const isValidPlacement = (sudoku: (string | number)[][], rowIndex: number, cellIndex: number, value: string | number) => {
        for (let i = 0; i < 9; i++) {
            if (sudoku[rowIndex][i] === value || sudoku[i][cellIndex] === value) {
                return false;
            }
        }
        const startRow = Math.floor(rowIndex/3) * 3;
        const startCol = Math.floor(cellIndex/3) * 3;
        for (let row = startRow; row < startRow + 3; row++) {
            for (let col = startCol; col < startCol + 3; col++) {
                if (sudoku[row][col] === value) {
                    return false;
                }
            }
        }
        return true;
    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center,',
            width: '630px',
            margin: 'auto',
            flexWrap: 'wrap'
        }}>
            <h1>SudoKu Games</h1>
            {
                puzzle.map((rowArr, rowIndex) => {
                    return (<div style={{
                        display: 'flex'
                    }} key={rowIndex}>
                        {
                            rowArr.map((item, cellIndex) => {
                                return (
                                    <input
                                    key={item+"-"+cellIndex}
                                    style={{
                                        width: '70px',
                                        height: '70px',
                                        border: '1px solid black',
                                        fontSize: '20px'
                                    }}
                                    value={item === 0 ? '' : item}
                                    onChange={(e) => {
                                        handleInputChange(rowIndex, cellIndex, e.target.value)
                                    }}
                                    maxLength={1}
                                    type="text"
                                    ></input>
                                )
                            })
                        }
                    </div>)
                })
            }
        </div>
    )
}