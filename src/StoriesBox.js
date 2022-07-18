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

const renderStories = stories.map((storie) =>
<div className="story">
    <div className="imagem">
        <img src={storie.storie_img} />
    </div>
    <div className="usuario">
        {storie.user}
    </div>
</div>);