import ReactDOM from 'react-dom';

import TopBar from './TopBar';
import Container from './Container';
import Sidebar from './Sidebar';

function App() {
    return (
        <div>
            <TopBar />
            <Container />
            <Sidebar />
        </div>

    )
}

ReactDOM.render(<App />, document.querySelector('.root'));
