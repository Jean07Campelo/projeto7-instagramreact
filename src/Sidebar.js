export default function Sidebar() {
    return (

        <div className='sidebar'>

            <div className="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div className="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {suggestions.map((suggestion) =>
                    <div className="sugestao">
                        <div className="usuario">
                            <img src={suggestion.image_profile} />
                            <div className="texto">
                                <div className="nome">{suggestion.user_name}</div>
                                <div className="razao">{suggestion.info_user}</div>
                            </div>
                        </div>

                        <div className="seguir">{suggestion.action}</div>
                    </div>
                )}

            </div>

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>

        </div>
    )
}

const suggestions = [
    {
        image_profile: 'assets/img/bad.vibes.memes.svg',
        user_name: 'bad.vibes.memes',
        info_user: 'Segue você',
        action: 'Seguir',
    },
    {
        image_profile: 'assets/img/bad.vibes.memes.svg',
        user_name: 'bad.vibes.memes',
        info_user: 'Segue você',
        action: 'Seguir',
    }

]