import React from 'react';

export default function PostsBox() {

    const [iconLiked, setIconLiked] = React.useState('heart-outline');
    const [colorIcon, setColorIcon] = React.useState(' ');

    return (
        <div className='posts'>
            {posts.map((post) =>
                <div className="post">
                    <div className="topo">
                        <div className="usuario">
                            <img src={post.image_profile} />
                            {post.userName}
                        </div>
                        <div className="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div className="conteudo" onClick={() => {
                        if (iconLiked === 'heart-outline') {
                            setIconLiked('heart-sharp');
                            setColorIcon('postLiked');
                        }
                    }} >
                        <img src={post.user_publication} />
                    </div>

                    <div className="fundo">
                        <div className="acoes">
                            <div>
                                <ion-icon name={iconLiked} className={colorIcon}></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                        <div className="curtidas">
                            <img src={post.image_profile_liked} />
                            <div className="texto">
                                Curtido por <strong>{post.profile_liked}</strong> e <strong>outras {post.total_liked} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    )

}

const posts = [
    {
        image_profile: 'assets/img/meowed.svg',
        userName: 'Doguineo',
        user_publication: 'assets/img/gato-telefone.svg',
        image_profile_liked: 'assets/img/meowed.svg',
        profile_liked: 'meowsupremo',
        total_liked: 351.400
    },
    {
        image_profile: 'assets/img/meowed.svg',
        userName: 'Meow',
        user_publication: 'assets/img/gato-telefone.svg',
        image_profile_liked: 'assets/img/respondeai.svg',
        profile_liked: 'patolino',
        total_liked: 200.048
    },
    {
        image_profile: 'assets/img/meowed.svg',
        userName: 'Meow',
        user_publication: 'assets/img/gato-telefone.svg',
        image_profile_liked: 'assets/img/respondeai.svg',
        profile_liked: 'pernalonga',
        total_liked: 987.523
    },
]