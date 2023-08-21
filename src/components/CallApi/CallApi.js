import axios from "axios";


  async function CallApi (){


    
    const listaProductos = await axios("../asyncMock.json");

    // FIREBASE



    return  listaProductos.data
    
}

export default CallApi