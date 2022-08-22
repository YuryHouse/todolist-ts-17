import {appReducer, setAppErrorAC, setAppStatusAC} from './app-reducer'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

let startState: any;

beforeEach(() => {
    startState = {
        error: null,
        status: 'idle'
    }
})

test('correct error message should be set', () => {

    const endState = appReducer(startState, setAppErrorAC({error: 'some error'}))

    expect(endState.error).toBe('some error');
})

test('correct status should be set', () => {

    const endState = appReducer(startState, setAppStatusAC({status: 'loading'}))

    expect(endState.status).toBe('loading');
})

