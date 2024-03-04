import './App.css'
const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize : 90,

}

function App(){
//Agrupar elementos sin la necesidad de poner un div o otro contenedor adicional
    return (
        <>
            <h1>{user.name}</h1>

            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                    
                }}
            />
        </>
    )
}


export default App