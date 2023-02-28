import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { MATH_IMG } from "../../../images/math"

export default function MathById() {
    const router = useRouter()
    const imgId = router.query.id as string
    const [img, setImg] = useState(MATH_IMG[imgId])

    return (
        <div id="info-math" className="center">
            <br />
            <Image 
                src="math.png"
                alt="math" 
                width={360}
                height={220}
                loader={() => img}
                priority
            />
        </div>
    )
}
