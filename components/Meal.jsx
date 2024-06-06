import { fetchData } from '@/utils'
import Image from 'next/image'

const Meal = async ({ category }) => {
    const data = await fetchData(`https://api.mirafgan.me/papajohns/${category || 'papadias'}`)
    return (
        <div className="flex gap-10 flex-wrap mt-10 pl-5">
            {data.map(item => (
                <div key={item.id} className="flex flex-col w-1/4">
                    <Image src={item.img} alt={item.name} width={300} height={200} className="w-full" />
                    <h1 className="font-bold text-xl">{item.name}</h1>
                    <p>{item.composition}</p>
                </div>
            ))}
        </div>
    )
}

export default Meal