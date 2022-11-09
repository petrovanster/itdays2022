import { render, screen } from '@testing-library/react';
import { computeGameState } from './Components/Board'

test('playing state', () => {
  const board = [
    [1, 0, 2],
    [0, 0, 0],
    [0, 0, 0]
  ]
  let res = computeGameState(board)
  expect(res).toBe("playing")
});


test('tie', () => {
  const board = [
    [1, 1, 2],
    [2, 2, 1],
    [1, 1, 2]
  ]
  let res = computeGameState(board)
  expect(res).toBe("tie")
});

test('player 1 wins', () => {
  const board = [
    [1, 0, 2],
    [0, 1, 0],
    [0, 0, 1]
  ]
  let res = computeGameState(board)
  expect(res).toBe("won1")
});

test('player 2 wins', () => {
  const board = [
    [2, 2, 2],
    [0, 0, 0],
    [0, 0, 0]
  ]
  let res = computeGameState(board)
  expect(res).toBe("won2")
});
