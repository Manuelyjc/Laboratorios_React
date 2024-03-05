import '../App.css'

function MyButton({count, onClick}){
    return(
      <>
          <button className="my-button" onClick={onClick}>
              Clicked {count} times
          </button>
      </>
    );
}

export default MyButton;