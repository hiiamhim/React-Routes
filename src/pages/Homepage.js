import { Router,Link,useNavigate } from "react-router-dom"

const Homepage=props=>{
    const navigate=useNavigate()
    const naviagteHandler=()=>{
        navigate('/products')
    }
    return <div>
       <h1>Home page</h1>
       <p>
        Go to <Link to='/products'>Products</Link>
       </p>
     
        <button onClick={naviagteHandler}>List  of products</button>
    </div>
}

export default Homepage