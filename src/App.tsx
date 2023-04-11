import { useReducer } from 'react';
import './App.css';
import { Footer } from './components/Footer';

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

function App() {
    const [{ count }, dispatch] = useReducer(reducer, initialState);

    const increase = () => dispatch({ type: 'increase' });
    const decrease = () => dispatch({ type: 'decrease' });

    return (
        <div className="App">
            <header className="header">
                Some page
            </header>
            <main>
                <button
                    type="button"
                    onClick={decrease}
                >
                    -
                </button>
                {count}
                <button
                    type="button"
                    onClick={increase}
                >
                    +
                </button>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
