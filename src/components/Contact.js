import React, { useState } from "react"
import "./Contact.css"

export default function Contact(){
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",})
    
      const InputEvent = (event) => {
        const { name, value } = event.target
    
        setData((preVal) => {
          return {
            ...preVal,
            [name]: value,
          }
        })
      }
    
      const formSubmit = (event) => {
        event.preventDefault()
        alert(
          `My name is ${data.fullname}. 
        My phone number is ${data.phone}. 
        My email address is ${data.email}. 
        My Subject on  ${data.subject}. 
        Here is my message I want to say : ${data.message}. 
        `
        )
      }
      return (
        <>
          <section className='contact' id='contact'>
            <div className='container top'>
              <div className='heading text-center'>
                <h4>CONTACT</h4>
              </div>
    
              <div className='content d_flex'>
                <div className='left'>
                  <div className='box box_shodow'>
                    <div className='img'>
                      <img src="/images/download-17.jpg" alt='' />
                    </div>
                    <div className='details'>
                      <h1>Elated Lion</h1>
                      <p>Student @ Brown University</p>
                      <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br />
                      <p>Phone: 829-282-1281 </p>
                      <p>Email: elatedlion787@brown.edu</p> <br />
                      <span>SOCIALS</span>
                      <div className='button f_flex'>
                        <button className='btn_shadow'>
                          <i className='fab fa-facebook-f'></i>
                        </button>
                        <button className='btn_shadow'>
                          <i className='fab fa-instagram'></i>
                        </button>
                        <button className='btn_shadow'>
                          <i className='fab fa-twitter'></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </div>
          </section>
        </>
      )
}