import { Link, Outlet, useParams } from "react-router-dom";
import { authors } from "../db";
function Authors () {
    const {name} = useParams(); 
    const list = authors.find((a) => a.name === name);
    

    return(
        <div>
            <h1>{name}</h1>
            <ul>
                {list?.books.map((book, index) => (
                    <li key={index}><Link to={book.title}>{book.title.replaceAll('_',' ')}</Link></li>
                ))}

            </ul>
            <Outlet />

            
        </div>
    );
}
export default Authors;