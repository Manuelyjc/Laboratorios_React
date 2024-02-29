import './App.css'

function MyButton() {
  return (
    <a href="https://github.com/Manuelyjc/Laboratorios_React"><button className="button">Soy un botón</button></a>
  );
}

function MyMensaje() {
  return (
    <div className="mensaje"> 
    <p>Algunos desarrolladores prefieren usar letras mayúsculas <br></br>
      para las etiquetas HTML con el fin de distinguirlas fácilmente<br></br>
       de otros elementos de JavaScript y CSS en sus archivos. </p>
       </div>
  );
}

function App(){
    return(
        <>
            <div className="container"> 
            <h1>Bienvenidos a mi app</h1>
            <p> la convención es escribir componentes React con mayúscula inicial. <br></br>
               Esto es parte de las convenciones de nomenclatura de React, donde <br></br>
               los componentes de React deben comenzar con una letra mayúscula<br></br>
               para diferenciarlos de los elementos HTML normales.</p>
            <MyButton/>
            <MyMensaje/>
            </div>
        </>
    );
}

export default App;