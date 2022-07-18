export default function StoriesBox() {
    return (

        <div className='corpo'>
            <div className='esquerda'>

                <div lass="stories">

                    {stories.map((storie) =>
                        <div class="story">
                            <div class="imagem">
                                <img src={storie.storie_img} />
                            </div>
                            <div class="usuario">
                                {storie.user}
                            </div>
                        </div>)
                    }

                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>

            </div>

        </div>


    )
}

const stories = [
    {
        user: '9gag',
        storie_img: 'assets/img/9gag.svg'
    },
    {
        user: '9gag',
        storie_img: 'assets/img/9gag.svg'
    },
    {
        user: '9gag',
        storie_img: 'assets/img/9gag.svg'
    },
    {
        user: '9gag',
        storie_img: 'assets/img/9gag.svg'
    },
]