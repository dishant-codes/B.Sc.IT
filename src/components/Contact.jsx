import React from 'react';
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () =>{
    return (
      
        <div className="container contact-box" style={{marginTop:"5em"}} >
           <h1 className="contact-us text-center mb-3">Get in touch</h1>
           <div className="row gy-4"> 
                <div className="col-sm-6">
                    <div className="card" >
                    <GrMail className="card-img-top mt-1" size="50px"/>
                    <div className="card-body text-center">
                        <h5 className="card-title"><b>Send an Mail</b></h5>
                        <p className="card-text"><a className="lead font-weight-bold btn btn-dark px-4"  href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;tf=1&amp;to=dishantaarak2696@gmail.com&amp;subject=try&amp;body=Hello">Mail</a></p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card" >
                    <FaPhoneAlt className="card-img-top mt-2" size="45px"/>
                    <div className="card-body text-center">
                        <h5 className="card-title"><b>Call to know more</b></h5>
                        <p className="card-text"><a className="lead font-weight-bold btn btn-dark px-4"  href="tel:+918788233512">Call</a></p>
                    </div>
                    </div>
                </div>
          </div>
        </div>

    );
} 

export default Contact;