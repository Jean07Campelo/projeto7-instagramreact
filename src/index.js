import ReactDOM from 'react-dom';

import TopBar from './TopBar';
import Container from './Container';
import Mobile from './Mobile.js';

function App() {
    return (
        <div>
            <TopBar />
            <Container />
            <Mobile />
        </div>

    )
}

ReactDOM.render(<App />, document.querySelector('.root'));
