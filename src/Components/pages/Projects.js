import { useLocation } from "react-router-dom"

import Message from "../layout/Message"

function Project(){
    const location = useLocation();
    let message = '';
    if(location.state){
        console.log(location.state.message);
        message = location.state.message;
    }

    return (
        <div>
            <h1>Projetos</h1>
            {message && <Message msg={message} type="success" />}
            
        </div>
    )
}

export default Project