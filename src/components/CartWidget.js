import carrito from "../assets/carrito.svg";

function CartWidget (){
    return (
        <div>
            <img src={carrito} alt="Carrito de Compras" />
            0
        </div>
    )
};

export default CartWidget;