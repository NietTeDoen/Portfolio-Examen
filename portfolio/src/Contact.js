import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubmitForm from "./components/SubmitForm.tsx";

function Contact(){
    return(
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Header/>
        <SubmitForm/>
        <Footer/>
        </div>
    )
}

export default Contact;