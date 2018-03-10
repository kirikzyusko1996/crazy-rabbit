import {
  LEADERBOARD_LOADED, LOGGED_IN,
  MOVE_OBJECTS, SHOOT, START_GAME, JUMP, CLEAR_ACTION, ADD_BLOCK, CHECK_COLLISIONS
} from '../actions';
import moveObjects from './moveObjects';
import startGame from './startGame';
import shoot from './shoot';
import jump from './jump';
import clearAction from './clearAction';
import addBlock from './createBlock';
import checkCollisions from './checkCollisions2';

const initialGameState = {
  started: false,
  kills: 0,
  lives: 3,
  currentHeight: -1,
  futureHeight: 0,
  flyingObjects: [],
  lastObjectCreatedAt: new Date(),
  currentPlayer: null,
  players: null,
  cannonBalls: [],
  blocks: []
};

const initialState = {
  action: null,
  angle: 45,
  gameState: initialGameState,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LEADERBOARD_LOADED:
      return {
        ...state,
        players: action.players,
      };
    case LOGGED_IN:
      return {
        ...state,
        currentPlayer: action.player,
      };
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    case START_GAME:
      return startGame(state, initialGameState);
    case SHOOT:
      return shoot(state, action);
    case JUMP:
      return jump(state);
    case CLEAR_ACTION:
      return clearAction(state);
    case ADD_BLOCK:
      return addBlock(state);
    case CHECK_COLLISIONS:
      return checkCollisions(state);
    default:
      return state;
  }
}

export default reducer;
