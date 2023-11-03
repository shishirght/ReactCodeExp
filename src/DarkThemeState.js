import { useState } from "react";

function DarkThemeState(){

    let css ={
            yellowText:{color:"Yellow"},
            blackText:{color:"black"},
            textBoxLight:{background:"white"},
            textBoxDark:{background:"black"}
    }
    let [theme,setTheme] = useState(false)
   
    return(
        <>        
        <label>This is Dark theme state page</label>  <br/><br/>
        <input type="number" placeholder="Enter your phone number.." style={theme?css.textBoxDark:css.textBoxLight}></input>   
        <button onClick={()=>setTheme(!theme)}>DARK- {JSON.stringify(theme)} </button>
       </>
    )

}

export default DarkThemeState;