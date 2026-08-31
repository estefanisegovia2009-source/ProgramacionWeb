 function Perfil(props){
    const {nombre} = props
    return(
        <> 
        <div>
            <h1>Hola {nombre} Bienvenida</h1>
            <p>Soy una futura desarrolladora</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>  
            </ul>
        </div>

        </>
    )
}

export default Perfil;