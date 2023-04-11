import { useState } from 'react';
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
    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);

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
