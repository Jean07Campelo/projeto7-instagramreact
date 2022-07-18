export default function TopBar() {
    return (
        <div className ="navbar">
            <div className ="container">
                <div className ="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className ="separador"></div>
                    <img src="assets/img/logo.png" />
                </div>

                <div className ="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div className ="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>

                <div className ="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div className ='icones'>
                {renderIcons}
                </div>
               

                <div className ="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}

const icons = 
[
    'paper-plane-outline', 
    'compass-outline', 
    'heart-outline', 
    'person-outline'
]

const renderIcons = icons.map((icon) => <ion-icon name={icon}></ion-icon>);