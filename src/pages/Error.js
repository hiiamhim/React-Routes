import { Link } from "react-router-dom"
function Error(){
  return <>
  <main>
    <h1>An Error Ocurred while lookign for this page</h1>
    <Link to="/">Go back</Link>
  </main>
  
  </>
}
export default Error