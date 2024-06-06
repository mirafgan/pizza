import Menu from '@/components/Menu'
import React from 'react'

const MealLayout = ({ children }) => {
    return (
        <>
            <Menu />
            <div>{children}</div>
        </>
    )
}

export default MealLayout