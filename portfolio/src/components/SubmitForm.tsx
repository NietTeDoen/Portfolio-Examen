import React, { ChangeEvent, useState } from "react";
import  "./SubmitForm.css";
import ActVariables from "./Activities";
import "./About.css";
import { FormEvent } from "react";
import axios from "axios";

type FormState = {
    email: string;
    name: string;
    message: string;
}

type ServiceMessage = {
  class: string;
  text: string;
}

function SubmitForm() {

    const formId = '1G0SJhTX';
    const formsparkurl = `https://submit-form.com/${formId}`

    const initialFormState = {
        email: '',
        name: '',
        message: '',
    };

    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [message, setMessage] = useState<ServiceMessage>();
    const SubmitData = async (event: FormEvent) =>{
        event.preventDefault();
        setSubmitting(true);
        await PostSubmission();
        setSubmitting(false);
    };

    const PostSubmission = async () => {
        const payload = {
            ...formState
        };

    try {
        const result = await axios.post(formsparkurl, payload);
        console.log(result);
        setMessage({
          class: 'br-green-500',
          text: 'Thanks, Someone will be in touch shorty.'
        })
    } catch(error){
        console.log(error);
        setMessage({
          class: 'br-red-500',
          text: 'Sorry, there was a problem. please try again or contact the admins.'
        })
    }
};

const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { id, value} = event.target;
  const formKey = id as keyof FormState;
  const updatedFormState = { ...formState};
  updatedFormState[formKey] = value;
  setFormState(updatedFormState);
};

  return (
    <div>
      <div className="Form__Gridbox">
        <div className="Form__Info">
        <div className="Form__Info__Text">
          <h1>Contact Me</h1>
          <p>
            need to get in touch with me in a fast and reliable way? send a
            message and I'll get back to you ASAP
          </p>
        </div>
        {message && (
          <div className={`${message.class}`}>
            {message.text}
            </div>
        )}
          <input onChange={updateFormControl} id="name" className="Form__Info__Name" placeholder="Name" value={formState.name}></input>
          <input onChange={updateFormControl} id="email" className="Form__Info__Email" placeholder="Email" value={formState.email}></input>
          <textarea
            onChange={updateFormControl}
            id="message"
            className="Form__Info__MSG"
            placeholder="Message"
            value={formState.message}
          ></textarea>
          <button 
          disabled={submitting}
          className="Form__Info__Submit" 
          onClick={SubmitData}>
            {submitting ? "submitting..." : "Submit"}</button>
        </div>
      </div>
    </div>
  );
}
export default SubmitForm;
