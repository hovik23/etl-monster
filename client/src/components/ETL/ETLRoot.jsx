import ETLProcess from './ETLProcess.jsx'
import Cookies from 'universal-cookie';

const ETLRoot = () => {
    const cookies = new Cookies();
    const isLogged = cookies.get("access_token")

    return (
        <>
            {isLogged && <ETLProcess/>}
            {!isLogged && <h1>Mutq ara, exbayr</h1>}
        </>
        )
}

export default ETLRoot;