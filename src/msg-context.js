import React from 'react';

export const mensajes = {
    msg1: 'mensaje 1',
    msg2: 'mensaje 2'
}

const MsgConstext = React.createContext({
    msg: 'default'
});

export default MsgConstext;