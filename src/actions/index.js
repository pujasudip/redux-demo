import types from './types';
import themes from '../themes';

const DEFAULT_THEME = 'light';

export const setTheme = (themeName = DEFAULT_THEME) => {
    let theme = themes[themeName];

    if(!theme){
        theme = themes[DEFAULT_THEME];
        themeName = DEFAULT_THEME;
    }

    localStorage.setItem('theme', themeName);

    return {
        type: types.SET_THEME,
        themeName,
        theme
    }

    //this is an equivalent to above return - older version
    // return {
    //     type: types.SET_THEME,
    //     themeName: themeName,
    //     theme: theme
    // }
};