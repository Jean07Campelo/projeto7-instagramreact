import StoriesBox from './StoriesBox';
import PostsBox from './PostsBox';

export default function Container() {
    return (
        
        <div className='corpo'>
            <div className='esquerda'>

                <StoriesBox />
                <PostsBox />

            </div>


        </div>
    )

}