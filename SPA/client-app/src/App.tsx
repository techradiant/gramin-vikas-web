
import './App.css'

function App() {
 
  return (
    <>
            
       
         <div id="search">
            <button type="button" className="close">×</button>
            <form className="search-overlay-form">
               <input type="search" value="" placeholder="type keyword(s) here" />
               <button type="submit" className="btn btn-primary"><i className="fas fa-search"></i></button>
            </form>
         </div>
        
    </>
  )
}

export default App
