import { useContext } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { DispatchContext, StateContext } from './components/StateContext';

function App() {
    const dispatch = useContext(DispatchContext);
    const { count } = useContext(StateContext);

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
