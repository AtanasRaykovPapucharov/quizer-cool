import Image from 'next/image'

import React, { ReactElement, useState, useEffect } from 'react'
import axios from 'axios'

import { randomStringGenerator } from '../../helper/random'
import { getData } from '../../helper/axiosRequester'
import { CoordinatesType, WeatherType } from './data/type'

import { WeatherUrl } from './data/weatherUrl'
import Bulgaria from './assets/Bulgaria.json'

import BgMap from './assets/map.jpg'

import { Colors, ASIDE, TITLE, HEADER, MAP, MAIN, BG, BLOG, SVG, HR } from './styles'
import BlogCard from '../BlogCard'

const randomKey = randomStringGenerator(24)
const initialCoordinates: CoordinatesType = {
  id: 'BG-23',
  lat: 42.6977,
  lon: 23.3219,
  location: 'Sofia'
}

export default function MapBg(): ReactElement {
  const [coordinates, setCoordinates] = useState(initialCoordinates)
  const [weather, setWeather] = useState({} as WeatherType)
  const [blog, setBlog] = useState([])
  const [currentBlog, setCurrentBlog] = useState([])

  useEffect(() => {
    axios
      .get(`/api/blog/bulgaria`)
      .then((resp: any) => { 
        setBlog(resp.data)

        const curBlog = resp.data.filter((b: any) => {
          return b.subtype == 'Sofia'
        })

        setCurrentBlog(curBlog)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
   getData(WeatherUrl(coordinates.lat, coordinates.lon)).then((data: any) => {
    const temp = Math.floor(data.main.temp - 273.15)
    const description = data.weather[0].description

    setWeather({temp, description})
   })
  }, [coordinates])

  return (
    <div className="container-resp-col" >
      <div className="flex-item-1">
        <main className='weather-app' style={MAIN}>
          <header className='container-flex-row' style={HEADER}>
            <aside className='left flex-item-5'>
              <h3 style={TITLE}>{
                Bulgaria.regions.find((r: any) => {
                  return r.title.en === coordinates.location
                })?.title.bg
              }</h3>
            </aside>
            <aside className='right flex-item-4' style={ASIDE}>
              <h5>
                темп: {weather.temp} <span></span>&#176;C <br />
              </h5>
            </aside>
          </header>

          <section className='map-wrapper' style={MAP}>

            <Image src={BgMap} alt="BG" width={345} height={240}/>

            <svg 
              viewBox="0 0 420 420" 
              width="440" 
              height="230" 

              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2"
              style={SVG}
              
              version="1.2" 
              xmlns="http://www.w3.org/2000/svg" 
              >
            {
              Bulgaria.regions.map((m: any) => {
                return <path 
                  id={m.id} 
                  key={randomKey.next().value} 
                  name={m.title.en}  
                  d={m.d} 

                  fill={ m.id === coordinates.id ? Colors.PINK : Colors.GREEN } 
                  stroke={Colors.WHITE} 
                  strokeWidth="3"

                  onClick={e => onClickMapRegionHandler(e)} 
                  onMouseEnter={e => onMouseEnterHandler(e)} 
                  onMouseLeave={e => onMouseLeaveHandler(e)} 
                  >
                  <title>{m.title.bg}</title>
                </path>
              })
            }
            </svg>
          </section>
        </main>
      </div>
      <div className="flex-item-2" style={BLOG}>
        {
          currentBlog.map((b: any) => {
            return <BlogCard { ...b } />
          })
        }
      </div>
    </div>
  )

  // event handlers
  function onMouseEnterHandler(e: any) {
    const target = e.target
    target.style.opacity = '0.3'
    e.stopPropagation()
  }

  function onMouseLeaveHandler(e: any) {
    const target = e.target
    target.style.opacity = '1'
    e.stopPropagation()
  }

  function onClickMapRegionHandler(e: any) {
    const target = e.target // svg path
    const location = target.getAttribute('name') // path name

    const newBlog = blog.filter((b: any) => {
      return location.includes(b.subtype)
    })

    setCurrentBlog(newBlog)

    const region = getRegionByName(location) || {} as CoordinatesType
    const id = target.id
    const lat = region.lat
    const lon = region.lon

    setCoordinates({id, lat, lon, location})
  }

  function getRegionByName(name: string) {
    return Bulgaria.regions.find((path: {title: {en: string}}) => path.title.en == name)
  }
}
