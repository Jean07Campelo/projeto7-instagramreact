import ReactDOM from 'react-dom';

import TopBar from './TopBar';
import StoriesBox from './StoriesBox';
import PostsBox from './PostsBox';
import Sidebar from './Sidebar';

function App() {
    return (
        <div>
            <TopBar />
            <StoriesBox />
            <PostsBox />
            <Sidebar />
        </div>

    )
}

ReactDOM.render(<App />, document.querySelector('.root'));
