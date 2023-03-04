import JsonTree from '../../../components/JsonTree'
import data from '../../../data/physics.json'

export default function Physics() {
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
