import React from 'react';
import './home.css';
import { connect } from 'react-redux';

const Home = props => {
    return (
        <div className='home'>
           <div className="row">
               <div className={`col s4 ${props.accent}`}>
               </div>
               <div className={`col s8 ${props.main}`}>
               </div>
           </div>
        </div>
    );
}

function mapStateToProps(state){
    return (
        {
            accent: state.theme.theme.accent,
            main: state.theme.theme.main
        }
    );
}

export default connect(mapStateToProps)(Home);