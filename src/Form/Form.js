import React from 'react';
import './Form.css';

const Form = (props) => {

    var firstname="",secondname="",age="",email="",city="",address="";

    const fname = (e) => {
        firstname = e.target.value;
    };

    const sname = (e) => {
        secondname = e.target.value;
    };

    const ag = (e) => {
        age = e.target.value;
    };

    const em = (e) => {
        email = e.target.value;
    };

    const add = (e) => {
        address = e.target.value;
    };

    const ci = (e) => {
        city = e.target.value;
    };

    const clicksubmit = () => {
        if(firstname.length < 1 || secondname.length < 1 || age.length < 1 || city.length < 1 || email.length < 1 || address.length < 1){
            alert("Please fill all the filds...");
        }
        else{
            props.senddata({
            Firstname : firstname,
            Secondname : secondname,
            Age : age,
            Email : email,
            Address : address,
            City : city
        });
        }  
    }

    return (
        <div className="Form-box">
            <div>
                <label htmlFor="firstname">First Name :</label>
                <input type="text" name="firstname" id="firstname" onChange={fname}></input>
            </div>

            <div>
                <label htmlFor="secondname">Second Name :</label>
                <input type="text" name="secondname" id="secondname" onChange={sname}></input>
            </div>
                
            <div>
                <label htmlFor="age">Age :</label>
                <input type="number" name="age" id="age" onChange={ag}></input>
            </div>
                
            <div>
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" id="email" onChange={em}></input>
            </div>

            <div>
                <label htmlFor="address">Address :</label>
                <textarea name="address" id="address" cols="30" rows="7" onChange={add}></textarea>
            </div>    

            <div>
                <label htmlFor="city">City :</label>
                <input type="text" name="city" id="city" onChange={ci}></input>
            </div>    

            <button onClick={clicksubmit}>submit</button>
        </div>
 );
}

export default Form;