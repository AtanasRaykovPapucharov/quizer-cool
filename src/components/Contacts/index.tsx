import Image from "next/image"
import { CSSProperties } from "react"
import { PhoneImg, LocationImg } from "../../images"

export default function Contacts() {
    const styles: CSSProperties = {
        color: "rgb(73, 104, 142)"
    }

    return (
        <div style={styles}>
            <br />
            <article className="container-flex-row" style={{width: "360px"}}>
                <aside className="flex-item-1" style={{paddingLeft: "2px"}}>
                    <Image 
                        src="phone.png"
                        alt="phone" 
                        width={36}  
                        height={36}
                        loader={() => PhoneImg}
                        priority
                    />
                </aside>
                <aside className="flex-item-5">
                    <label>Телефон: </label>
                    <br />
                    <a href="tel:+359988743506"><em>0988 743 506</em></a>
                </aside>
            </article>
            <br />
            <article className="container-flex-row" style={{width: "360px"}}>
                <aside className="flex-item-1" style={{paddingLeft: "2px"}}>
                    <Image 
                        src="location.png"
                        alt="location" 
                        width={39}  
                        height={39}
                        loader={() => LocationImg}
                        priority
                    />
                </aside>
                <aside className="flex-item-5">
                    <label>Адрес: </label>
                    <br />
                    <span><em>ж.к. "Люлин 7", бл. 717, вх. В</em></span>
                </aside>
            </article>
            <br />
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2931.53347783203!2d23.25778771533416!3d42.71359807916469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa9a907db2f827%3A0xb451eb13b76c92d4!2sG.K.%20Lyulin%207%20717%D0%92%2C%201324%20zh.k.%20Lyulin%207%2C%20Sofia!5e0!3m2!1sen!2sbg!4v1675343540736!5m2!1sen!2sbg" 
                width="100%" height="450"
                style={{border: "1px solid rgb(73, 104, 142)"}}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
            />
        </div>
    )
}
