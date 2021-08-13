import { Fragment, useContext } from 'react';
import './Child1.css'
import Child2 from './Child2';
import MsgConstext from './msg-context';

function Child1(){
    const ctx1 = useContext(MsgConstext);
    return(
        <Fragment>
            <div className="child1">
                <p>el mensaje en child 1 es</p>
                <p>{ctx1}</p>
            </div>
            <Child2 />
        </Fragment>
    );
}

export default Child1;