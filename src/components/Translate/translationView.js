import React from 'react'
import translationUpdateApi from './translation.js'
import { useDispatch, useSelector } from "react-redux";


function Translation() {
    
    const { username, id } = useSelector(state => state.session);
    
    console.log(id)

    const [letters, setLetters] = React.useState([])

    let textInput = React.createRef();

    const translate = event =>{

        let currentText = textInput.current.value

        let splitText = currentText.replace(/ /g, "").split('')

        setLetters(splitText)

        translationUpdateApi(currentText, id)

    }
    

    return (
        <div>
            <h1>Translation</h1>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Fill in a word to translate</label>
                <textarea ref={textInput} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div id = 'handSigns'>

                {letters.map((letter)=>{
                    return <img  src={require('../../../public/assets/handSigns/' + letter + '.png')} /> 
                }

                )}
            </div>
            <button onClick={ translate } type="button" className="btn btn-primary">Translate</button>
        </div>
    )
}

export default Translation