import ReactDOM from 'react-dom';

import TopBar from './TopBar';
import Container from './Container';

function App() {
    return (
        <div>
            <TopBar />
            <Container />
        </div>

    )
}

ReactDOM.render(<App />, document.querySelector('.root'));
