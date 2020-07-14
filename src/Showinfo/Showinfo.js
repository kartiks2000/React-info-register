import React from 'react';
import './Showinfo.css';

const Showinfo = (props) => {

    return(
        <div className="Showinfo">
            <div className="divrow">
                <label htmlFor="firstname">First Name :</label>
                <h2>{props.fname}</h2>
            </div>

            <div className="divrow">
                <label htmlFor="secondname">Second Name :</label>
                <h2>{props.sname}</h2>
            </div>
                
            <div className="divrow">
                <label htmlFor="age">Age :</label>
                <h2>{props.ag}</h2>
            </div>
                
            <div className="divrow">
                <label htmlFor="email">Email :</label>
                <h2>{props.em}</h2>
            </div>

            <div className="divrow">
                <label htmlFor="address">Address :</label>
                <h2>{props.add}</h2>
            </div>    

            <div className="divrow">
                <label htmlFor="city">City :</label>
                <h2>{props.ci}</h2>
            </div> 

            <button className="btn" onClick={() => props.clicked(props.myid)}>Remove</button>
        </div>
    );
}

export default Showinfo;