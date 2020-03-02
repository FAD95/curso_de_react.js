import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/css/Badges.css';

class Badge extends React.Component{
    render(){
        return(
            <div className='Badge'>
                <header className='Badge__header'>
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </header>
                <main>
                    <section className='Badge__section-name'>
                        <img  className='Badge__section-name__avatar' src="https://es.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                        <h1>Fadith <br/> Escorcia</h1>
                    </section>
                    <section className='Badge__section-info'>
                        <h3>Frontend Developer</h3>
                        <span>@Fad</span>
                    </section>
                </main>
                <footer className='Badge__footer'>
                    #platziConf
                </footer>
            </div>
        )
    }
}

export default Badge;