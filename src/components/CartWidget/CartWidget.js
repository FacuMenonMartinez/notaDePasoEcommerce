import carrito from "../../assets/carrito.png";

function CartWidget (){
    return (
        <div className="div-carrito column navbar-item  is-one-quarter">
            <img className="carrito-logo"  src={carrito} alt="Carrito de Compras" />
            <div className="contador-carrito">0</div>
        </div>
    )
};

export default CartWidget;