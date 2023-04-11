import { useReducer } from 'react';
import './App.css';
import { Footer } from './components/Footer';

const reducer = (count: number, actions: string) => {
    switch (actions) {
        case 'increase':
            return count + 1;
        case 'decrease':
            return count - 1;
        default:
            return count;
    }
};

function App() {
    const [count, dispatch] = useReducer(reducer, 0);

    const increase = () => dispatch('increase');
    const decrease = () => dispatch('decrease');

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
