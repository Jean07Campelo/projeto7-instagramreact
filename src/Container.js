import StoriesBox from './StoriesBox';
import PostsBox from './PostsBox';
import Sidebar from './Sidebar';

export default function Container() {
    return (

        <div className='corpo'>

            <div className='esquerda'>

                <StoriesBox />
                <PostsBox />
            </div>

            <Sidebar
                userName='lorde_supremo'
                imgProfile='assets/img/dog.svg'
                name='Padawan em treinamento' />

        </div>
    )

}