import "./Experiences.css"
import React from 'react'
import ClassExperienceCard from "./ClassExperienceCard"
import WorkExperienceCard from "./WorkExperienceCard"
import Header from "./Header"

export default function Experiences(){
    const class_experience = [
        {id: 1,
         class: 'CS1300: UI/UX',
         semester: 'Fall 2022',
         skills: 'UI Development, UX Researching, Figma, React, HTML',
         desc: 'Focused on modeling user interactions, designing and prototyping interfaces and evaluating interfaces',
         link: 'https://cs.brown.edu/courses/csci1300/'
        }, 
        {
         id: 2,
         class: 'CS1460: Computational Linguistics',
         semester: 'Fall 2022',
         skills: 'Pytorch, Language Modeling, Machine Translation, Deep Learning',
         desc: 'Explored variety of NLP tasks, ranging form machine translation to question answering to text classification. Studied language modeling and neural approaches to NLP.',
         link: 'https://csci-1460-computational-linguistics.github.io/',
        },
        {
          id: 3,
          class: 'CS1951L: Blockchains and Cryptocurrency',
          semester: 'Spring 2021',
          skills: 'Go, Solidity, Concurrency, Blockchain Research',
          desc: 'Learnt about and worked with smart contracting, blockchain security and various forms of blockchain implementation',
          link: 'https://csci1951l-spring2022.vercel.app/',
        }, 
        {
            id: 4,
            class: 'CS1951A: Data Science',
            semester: 'Spring 2021',
            skills: 'SQL, Python, Pandas, Data Mining, Statistics, Graph Creation', 
            desc: 'Explored data cleaning, data manipulation, data scraping and machine learning. Developed an intuition for hypothesis testing',
            link: 'https://csci1951a-spring-2022.github.io/',
        }, 
        {
            id: 5,
            class: 'CS1470: Deep Learning',
            semester: 'Fall 2021',
            skills: 'TensorFlow, Keras, Neural Nets, Discriminative Models, Generative Models',
            desc: 'Explored variety of deep learning technologies (LSTM, Transformer, VAE, GAN, CNN) and a variety of tasks that these technologies are used for.',
            link: 'https://brown-deep-learning.github.io/dl-website-f22/'
        }
    ]

    const work_experience = [
        {id: 1,
            title: 'Software Engineering Intern',
            company: 'FakeBook L.P', 
            start_date: '06/01/2022',
            end_date: '08/08/2022',
            skills: 'Python, Fullstack Development',
            desc: 'Spent the summer at FakeBook producing log-based queries for their security team and then creating a dashboard to display these queries '
        }, 
        {id: 2,
            title: 'Software Engineering Intern',
            company: 'Doodle', 
            start_date: '06/01/2021',
            end_date: '08/08/2021',
            skills: 'React, Node.js, SQL',
            desc: 'Built a full stack application for the Doodle Geo Team to track their latest acquired data assets and to create exportable Excel files for their work'
        } 
    ]
    return (
        <section id="experiences" className="experiences">
            <div className='container top'>
                <div className='heading text-center'>
                    <h4>2019-2023</h4>
                    <h1>My Experiences</h1>
          </div>

          <div className='content-section'>
            <div className='left'>
              <div className='heading'>
                <h2>Classes Taken</h2>
              </div>

              <div className='content'>
              {
                class_experience.map((val, id) => {
                    //  return <Header/>
                    return <ClassExperienceCard key={id} class_name={val.class} skills={val.skills} desc={val.desc} semester={val.semester} link={val.link}/>
                })
            }
               
              </div>
              <div className='heading'>
                <h2> Industry Experience </h2>
              </div>

              <div className='content'>
                {work_experience.map((val, id) => {
                    //  return <Header/>
                    return <WorkExperienceCard title={val.title} company={val.company} start_date={val.start_date} end_date={val.end_date} skills={val.skills} desc={val.desc}/>
                })
                }
              </div>
            </div>
          </div>
        </div>
        </section>
    )
}