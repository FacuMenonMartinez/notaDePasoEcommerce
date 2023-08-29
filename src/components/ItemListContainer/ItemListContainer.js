import { Link } from "react-router-dom";
import Checkout from "../../pages/Checkout/Checkout";

function ItemListContainer ({greetin}){
return (
    <div>
        <h1>{greetin}</h1>
        <Link to="/checkout"><button>CHECKOUT</button></Link>
    </div>
)
}

export default ItemListContainer;