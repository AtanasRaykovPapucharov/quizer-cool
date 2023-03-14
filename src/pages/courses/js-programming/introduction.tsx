import Image from 'next/image'

import {useAppSelector} from '../../../redux/hooks/useAppSelector'

import JsonTree from '../../../components/JsonTree'
import data1 from '../../../data/programs/js/programming-fundamentals.json'
import data2 from '../../../data/programs/js/programming-advanced.json'
import data3 from '../../../data/programs/js/programming-oop.json'
import basic from '../../../data/basic.json'
import { CSSProperties } from 'react'
import Link from 'next/link'

const paragraphs = {
    programming: [
        "Computer programming is the process of writing instructions that a computer can understand and execute. Just like how we give directions to a friend, we give instructions to a computer in a language it can understand, called a programming language.",
        "These instructions can be used to create all sorts of programs, from simple games to complex applications that help us do our work. The programmer writes code using programming language, and the computer follows the instructions to carry out the desired task.",
        "Programming requires a combination of logical thinking and creativity to solve problems, break down tasks into manageable steps, and write code that is both efficient and easy to understand. With practice and patience, anyone can learn to program and create their own programs to solve problems or bring their ideas to life."
    ],
    js: [
        "JavaScript is a programming language that is used primarily to add interactive features to web pages. It was created in 1995 by Brendan Eich, who was working at the time for the company Netscape. The goal was to create a scripting language that could run in web browsers and provide a way to make web pages more dynamic.",
        "Initially, JavaScript was called Mocha, but later it was renamed to LiveScript, and then finally JavaScript. JavaScript became popular quickly, and in 1996, Microsoft created its own version called JScript, which is still used today.",
        "In 1997, JavaScript was standardized by the European Computer Manufacturers Association (ECMA), and it became known as ECMAScript. This standardization helped ensure that JavaScript code could run consistently across different web browsers.",
        "Since then, JavaScript has continued to evolve and improve, with new features being added regularly. Today, it is one of the most widely used programming languages in the world, and it is used not only for web development but also for creating desktop and mobile applications."
    ]
}

export default function JsFundamentals() {
    const route = useAppSelector(state => state.route)

    return (
        <div>
            <h2 className='center'>JavaScript</h2>
            <h3 className='center'>1. Basics</h3>
            <h3>Introduction to computer programming</h3>
            <div className='' style={{backgroundColor: "rgb(236, 232, 246)", padding: "1px 3px 1px 5px"}}>
                {
                    paragraphs.programming.map((obj: string, i: number) => {
                        return <p key={i}>{obj}</p>
                    })
                }
            </div>
            <h3>Introduction to JavaScript</h3>
            <div className='' style={{backgroundColor: "rgb(236, 232, 246)", padding: "1px 3px 1px 5px"}}>
                {
                    paragraphs.js.map((obj: string, i: number) => {
                        return <p key={i}>{obj}</p>
                    })
                }
            </div>
            <p>
                For more about JavaScript history, go to&nbsp;
                <Link href="https://www.w3schools.com/js/js_history.asp" style={{color: "rgb(244,162,50)"}}>
                    <em>www.w3schools.com</em>
                </Link>
            </p>
        </div>
    )
}
