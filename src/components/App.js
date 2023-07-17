import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer"

function App(){

    return (
        <div>
        <NavBar/>
        <ItemListContainer greetin='Bienvenidos a mi tienda'/>
        </div>
    )
}

export default App;