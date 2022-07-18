import ReactDOM from 'react-dom';

import TopBar from './TopBar';
import StoriesBox from './StoriesBox';
import Sidebar from './Sidebar';

function App() {
    return (
        <div>
            <TopBar />
            <StoriesBox />
            <Sidebar />
        </div>

    )
}

ReactDOM.render(<App />, document.querySelector('.root'));
