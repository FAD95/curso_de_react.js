import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    state = {  }
    render() { 
        return ( 
            <main>
                <h1>Home</h1>
                <Link to="/curso_de_react.js/badge/">Hla</Link>
            </main>
         );
    }
}
 
export default Home;