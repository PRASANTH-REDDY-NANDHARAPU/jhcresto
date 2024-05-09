import { Link } from "react-router-dom"

const Navbar=()=>{
    return <div className="nav">
        <h1>Buggy</h1>
        <ul>  
            <Link  to="/"><li className="link">Home</li></Link>
            <Link  to="/offers"> <li className="link">Offers</li></Link>
            <Link  to="/help"><li className="link">Help</li></Link>
            <Link  to="/about"> <li className="link">About</li></Link>
            <Link  to="/contact"><li className="link">Contact</li></Link>
            <Link  to="/search"><li className="link">Search</li></Link>
            <Link  to="/account"><li className="link">Account</li></Link>
        </ul>
    </div>
}

export default Navbar