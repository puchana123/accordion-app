import { useState } from "react"
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

function Card(props){

    const [showContent,setShowContent] = useState(false)

    return(
        <article className="content">
            <header>
                <h4>{props.title}</h4>
                <button className="btn" 
                onClick={()=>setShowContent(!showContent)}>
                    {showContent? <AiOutlineMinus size={70}/>:<AiOutlinePlus size={70}/>}
                </button>
            </header>
            {showContent && <p>{props.description}</p>}
            
        </article>
    )
}

export default Card