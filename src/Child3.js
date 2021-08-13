import { Fragment, useContext } from 'react';
import './Child3.css'
import MsgConstext from './msg-context';

function Child3(){
    const ctx1 = useContext(MsgConstext);
    return(
        <Fragment>
            <div className="child3">
                <p>el mensaje en child 3 es</p>
                <p>{ctx1}</p>
            </div>
        </Fragment>
    );
}

export default Child3;