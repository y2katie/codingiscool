// import React from "react";

// const Home = () => {
//     return (
//         <div>
//             <h1> Welcome to My Brain </h1>
//         </div>
//     )
// }

// export default Home;

import React, {Component} from "react";
import Button from '@mui/material/Button';


export default class Home extends Component {
    render(){
        return (
            <div>
                <Button variant="contained"> Hello </Button>
            </div>
        )
    }
}