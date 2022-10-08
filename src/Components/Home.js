import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return <div>
        <h1>Fake Store App</h1>
        <div>vv vfdvfdv dfdgdf dd dsfdfd</div>
        <br/>
        <Link to="/products">Go to products</Link>
        <br/>
        <Link to="/not-found">Go to </Link>
    </div>
}

export default Home;