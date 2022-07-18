export default function Sidebar () {
    return (
        
        <div className='sidebar'>

            <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
          </div>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {suggestions.map((suggestion) => 
                <div class="sugestao">
                    <div class="usuario">
                        <img src={suggestion.image_profile} />
                        <div class="texto">
                            <div class="nome">{suggestion.user_name}</div>
                            <div class="razao">{suggestion.info_user}</div>
                        </div>
                    </div>

                    <div class="seguir">{suggestion.action}</div>
                </div>
            )}

        </div>
        </div>
    )
}

const suggestions = [
    {
        image_profile: 'assets/img/bad.vibes.memes.svg',
        user_name: 'bad.vibes.memes',
        info_user: 'Segue você',
        action:'Seguir',
    },
    {
        image_profile: 'assets/img/bad.vibes.memes.svg',
        user_name: 'bad.vibes.memes',
        info_user: 'Segue você',
        action:'Seguir',
    }

]