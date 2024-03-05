import './App.css'
import MyButton from "./components/MyButton.jsx";


function MyMensaje() {
    return (
      <div className="mensaje"> 
      <p> función que se ejecuta en respuesta a un evento específico  de un componente que <br></br>
          ocurre dentro de un programa o aplicación. Oprime el boton!!.  <br></br>
          </p>
         </div>
    );
  }

function  App(){
    return(
        <>
            <h1>Responder a eventos</h1>
            <MyMensaje/>
            <br></br>
            <MyButton/>
        </>
    );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 46addf3a840b7935ff27b923f98c780060e6c139
