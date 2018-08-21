import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTheme } from '../actions';

class SetTheme extends Component{
    componentDidMount(){
        this.props.setTheme('light');
    }

    themeClickHandler(){
        // this.props.theme === 'light' ? this.props.setTheme('dark') : this.props.setTheme('light');
        const nextTheme = this.props.theme === 'light' ? 'dark' : 'light';

        this.props.setTheme(nextTheme);
    }

    render(){
        console.log('Theme: ', this.props.theme);
        return <button className='btn white black-text' onClick={this.themeClickHandler.bind(this)}>{} theme</button>
    }
}

function mapStateToProps(state){
    return {
        theme: state.theme.themeName
    }
}

export default connect(mapStateToProps, { setTheme: setTheme})(SetTheme);