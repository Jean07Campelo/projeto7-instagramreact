export default function StoriesBox() {
    return (
                <div className="stories">

                    {renderStories}

                    <div className="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
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
        user: 'respondeai',
        storie_img: 'assets/img/respondeai.svg'
    },
    {
        user: 'smallcutecats',
        storie_img: 'assets/img/smallcutecats.svg'
    },
    {
        user: 'gato-telefone',
        storie_img: 'assets/img/gato-telefone.svg'
    },
    {
        user: 'razoesparaacreditar',
        storie_img: 'assets/img/razoesparaacreditar.svg'
    },
    {
        user: 'memeriagourmet',
        storie_img: 'assets/img/memeriagourmet.svg'
    },
    {
        user: 'meowed',
        storie_img: 'assets/img/meowed.svg'
    },
    {
        user: 'dog',
        storie_img: 'assets/img/dog.svg'
    }
]

const renderStories = stories.map((storie) =>
<div className="story">
    <div className="imagem">
        <img src={storie.storie_img} />
    </div>
    <div className="usuario">
        {storie.user}
    </div>
</div>);