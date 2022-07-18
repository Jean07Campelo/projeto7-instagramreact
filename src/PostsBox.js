export default function PostsBox() {
    return (
        <div className='posts'>
            {renderPosts}
        </div>
    )
}

const posts = [
    {
        image_profile: 'assets/img/meowed.svg',
        userName: 'Meow',
        user_publication: 'assets/img/gato-telefone.svg',
        image_profile_liked: 'assets/img/respondeai.svg',
        profile_liked: 'respondeai',
        total_liked: 102.522
    },
]

const renderPosts = posts.map((post) =>
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={post.image_profile} />
                    {post.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={post.user_publication} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={post.image_profile_liked} />
                    <div class="texto">
                        Curtido por <strong>{post.profile_liked}</strong> e <strong>outras {post.total_liked} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>)