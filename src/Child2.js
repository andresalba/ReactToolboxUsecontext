import { Fragment, useContext } from 'react';
import './Child2.css'
import MsgConstext from './msg-context';

function Child2(){
    const ctx1 = useContext(MsgConstext);
    return(
        <Fragment>
            <div className="child2">
                <p>el mensaje en child 2 es</p>
                <p>{ctx1}</p>
            </div>
        </Fragment>
    );
}

export default Child2;