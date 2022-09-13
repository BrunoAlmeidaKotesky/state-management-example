import { useReducer, useState } from "react";
import {useImmer} from 'use-immer';

const initialState: number = 0;
const reducer = (state: number, action: { type: string, payload?: number }) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'add':
            return state + action?.payload!;
        case 'reset':
            return initialState;
        default: return state;
    }
};

export default function Local() {
    const [count, setCount] = useState<number>(0);
    const [count2, dispatch] = useReducer(reducer, initialState);
    const [states, setStates] = useImmer<string[]>(['useState', 'useReducer', 'useImmer']);

    return (
        <div>
            <div>
                <h3>useState</h3>
                <p>{count}</p>
                <button onClick={() => setCount(prev => prev +  1)}>Increment</button>
            </div>
            <div>
                <h3>useReducer</h3>
                <p>{count2}</p>
                <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
                <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
                <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
                <button onClick={() => dispatch({type: 'add', payload: 5})}>Add + 5</button>
            </div>
            <div>
                <h3>useImmer</h3>
                <div>{states.map((name, idx) => (<div key={name}>
                    <p>{name}</p>
                    <button onClick={() => {
                        setStates(draft => {
                            draft.splice(idx, 1)
                            return draft;
                        });
                        /**Sem immer:
                         * const filtered = states.filter((_, i) => i !== idx);
                         * setStates(p => filtered);
                         */
                    }}>Remove</button>
                </div>))}</div>
            </div>
        </div>
    )
}