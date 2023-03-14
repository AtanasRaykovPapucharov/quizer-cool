import Image from "next/image"
import useAxios from "axios-hooks"
import React, { useState, useRef } from "react"
import ERROR_404 from "../404"
import Loading from "../Loading"
import ReserveLessonForm from "../ReserveLessonForm"
import { days, daysFull, hours, months, monthsFull } from "./data"
import { BtnStyles, CloseStyles, CalendarWrapperStyles, DateFormStyles, DateStyles } from "./styles"
import { CloseBtnImg, KidsImg, Natalka } from "../../images"

type DateType = {
    day: string,
    month: string,
    year: string,
    weekDay: string
}

export default function Calendar() {
    const [{ data, loading, error }] = useAxios(`/api/business`)
    const [date, setDate] = useState<DateType | null>(null)
    const [hour, setHour] = useState<string | null>(null)
    const [businessList, setBusinessList] = useState([])

    const dateRef = useRef<HTMLDivElement>(null)
    const hourRef = useRef<HTMLDivElement>(null)

    let currentDate = new Date()

    if (loading) return <Loading />
    if (error) return <ERROR_404 />

    const reserveLesson = (e: any) => {
        setHour(e.target.innerText.trim())

        hourRef.current!.style.display = "inherit"
    }

    const dateClicked = (e: any) => {
        const target = e.target
        const fullDate = target.id.split('-')
        const day = fullDate[0]
        const month = fullDate[1]
        const year = fullDate[2]
        const weekDay = fullDate[3]

        const newData = data.filter((d: any) => {
            return d.date === target.id
        })

        setBusinessList(newData)

        console.log(target.id)
        console.log(newData)

        setDate({day, month, year, weekDay})

        dateRef.current!.style.display = "inherit"
    }

    return (
        <div style={CalendarWrapperStyles}>
            <br />
            <article className="center">
                <Image 
                    src="kids.png"
                    alt="kids" 
                    width={210}  
                    height={103}
                    loader={() => KidsImg}
                    priority
                />
            </article>
            <h4 className="center" style={{marginTop: "0px"}}><em>Избери ден и свободен час</em></h4>
            <div>
            {
                [...Array(4)].map((date: any, i : number) => {
                    return <div key={i} className='container-flex-row '>
                        {
                            [...Array(7)].map((d: any, j : number) => {
                                currentDate.setDate(currentDate.getDate() + 1)

                                return <div 
                                    key={j} 
                                    className='center flex-item-1' 
                                    style={DateStyles}
                                    onMouseEnter={(e: any) => e.target.style.opacity = '.9'}
                                    onMouseLeave={(e: any) => e.target.style.opacity = '1'}
                                >
                                    <div 
                                        id={
                                            `${currentDate.getDate()}-${monthsFull[currentDate.getMonth()]}-${currentDate.getFullYear()}-${daysFull[currentDate.getDay()]}`
                                        } 
                                        
                                        onClick={dateClicked}
                                    >
                                        {currentDate.getDate() + ' ' + months[currentDate.getMonth()]}
                                        <br />
                                        {days[currentDate.getDay()]}
                                    </div>
                                    {(j + 1) % 7 == 0 ? <br /> : null}
                                </div>
                            })
                        }
                    </div>
                })
            }
            </div>

            <div 
                className="reserve-lesson"
                ref={dateRef}
                style={DateFormStyles}
            >
                <Image 
                    src="close.png"
                    alt="close" 
                    width={36}  
                    height={36}
                    style={CloseStyles}
                    loader={() => CloseBtnImg}
                    onClick={() => dateRef.current!.style.display = "none"}
                    priority
                />
                <h4 className="center">
                    <em>Изберете свободен час за</em>
                </h4>

                <header className="center">
                    <span>{date?.day}&nbsp;&nbsp;</span>
                    <span>{date?.month}&nbsp;&nbsp;</span>
                    <span>{date?.year}</span>
                    <br />
                    <span>{date?.weekDay}</span>
                </header>

                <br />

                <section className="container-resp-col">
                    <div className="flex-item-1"></div>
                    <div className="flex-item-2 center">
                        {
                            hours.map((h, i) => {
                                const index = businessList.findIndex((el: any) => {
                                    return el.time === h
                                })

                                return <article key={i}>
                                    { i < 5 ? <div className="container-flex-row">
                                        <button 
                                            onClick={index === -1 ? reserveLesson : () => {}} 
                                            className="flex-item-1"
                                            style={{width: "113px"}}
                                        >{h}</button>
                                        {
                                            index === -1 ? 
                                            <span className="flex-item-1" style={{color: "green"}}>&nbsp;&nbsp;свободен</span> :
                                            <span className="flex-item-1" style={{color: "red"}}>&nbsp;&nbsp;зает</span>
                                        }
                                    </div> : null }
                                </article>
                            })
                        }
                    </div>
                    <div className="flex-item-2 center">
                        {
                            hours.map((h, i) => {
                                const index = businessList.findIndex((el: any) => {
                                    return el.time === h
                                })

                                return <article key={i}>
                                    { i > 4 ? <div className="container-flex-row">
                                        <button 
                                            onClick={index === -1 ? reserveLesson : () => {}} 
                                            className="flex-item-1"
                                            style={{width: "113px"}}
                                        >{h}</button>
                                        {
                                            index === -1 ? 
                                            <span className="flex-item-1" style={{color: "green"}}>&nbsp;&nbsp;свободен</span> :
                                            <span className="flex-item-1" style={{color: "red"}}>&nbsp;&nbsp;зает</span>
                                        }
                                    </div> : null }
                                </article>
                            })
                        }
                    </div> 
                    <div className="flex-item-1"></div>
                </section>

                <br />

                <div className="center">
                    <button 
                        style={BtnStyles}
                        onClick={() => dateRef.current!.style.display = "none"}
                    >
                        Затвори
                    </button>
                </div>
                <br />
            </div>

            <div 
                className="reserve-hour"
                ref={hourRef}
                style={DateFormStyles}
            >
                <Image 
                src="close.png"
                alt="close" 
                width={36}  
                height={36}
                style={CloseStyles}
                loader={() => CloseBtnImg}
                onClick={() => hourRef.current!.style.display = "none"}
                priority
                />
                <header className="center">
                    <span>{date?.day}&nbsp;&nbsp;</span>
                    <span>{date?.month}&nbsp;&nbsp;</span>
                    <span>{date?.year}</span>
                    <br />
                    <span>{date?.weekDay}</span>
                    <br />
                    <span>{hour} часа</span>
                </header>

                <br />
                <ReserveLessonForm {...{date: `${date?.day}-${date?.month}-${date?.year}-${date?.weekDay}`, time: hour}} />
                <br />

                <div className="center">
                    <button 
                        style={BtnStyles}
                        onClick={() => hourRef.current!.style.display = "none"}
                    >
                        Затвори
                    </button>
                </div>
                <br />
            </div>
        </div>
    )
}
