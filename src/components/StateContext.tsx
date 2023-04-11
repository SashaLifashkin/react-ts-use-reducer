import React, { useReducer } from 'react';

const reducer = (state: { count: number, lang: string }, action: { type: string }) => {
    switch (action.type) {
        case 'increase':
            return {
                ...state,
                count: state.count + 1,
            };
        case 'decrease':
            return {
                ...state,
                count: state.count - 1,
            };;
        default:
            return state;
    }
};

const initialState = {
    count: 0,
    lang: 'eu',
};

export const DispatchContext = React.createContext<React.Dispatch<{ type: string }>>(() => {});
export const StateContext = React.createContext(initialState);

export const StateProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
};
