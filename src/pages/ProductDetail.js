import { useParams } from "react-router-dom"
const ProductDetail=()=>{
   const parmas=useParams()
    return <>
    <h1>Product detail of id {parmas.id}</h1>
    
    </>

}

export default ProductDetail