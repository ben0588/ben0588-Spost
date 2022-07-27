import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function Labels(props) {
    const [font, setFont] = useState([])

    useEffect( () => {
        // console.log(props.types)
        if ( props.id != undefined ) {
            if ( props.id[1] ) {
                if ( props.types.split(';').length <= 7) {
                    setFont(props.types.split(';'))
                }else {
                    setFont(props.types.split(';').slice(0, 7))
                }
            }else {
                setFont([props.mode, props.types])
            }
        }
    }, [props])


    return font.map( (value, idx) => {
        return (
            <div className='mt-2 animate__animated animate__flipInX' key={idx}>
                <button className='btn w-100 text-start'>{value}</button>
            </div>
        )
    })
}
export default Labels;