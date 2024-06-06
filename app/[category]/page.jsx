import Meal from '@/components/Meal'
import React from 'react'

const Page = ({ params: { category } }) => {
    return (
        <Meal category={category} />
    )
}

export default Page