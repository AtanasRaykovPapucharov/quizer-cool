import Image from 'next/image'

import {useAppSelector} from '../../redux/hooks/useAppSelector'

import JsonTree from '../../components/JsonTree'
import data from '../../data/physics.json'

const jsLoader = () => {
    return `https://res.cloudinary.com/hapiherb/image/upload/v1675022944/apps/js_aabroh.png`
}

export default function JsFundamentals() {
    const route = useAppSelector(state => state.route)

    return (
        <div>
            <h2 className='center'>
                ФИЗИКА
            </h2>
            <div className='container-resp-col'>
                <div className='flex-item-1'>
                    {JsonTree(data)}
                </div>
            </div>
        </div>
    )
}
