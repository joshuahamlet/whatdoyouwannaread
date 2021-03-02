import React from 'react'
import './SkeletonCard.scss'
import {IoReloadCircle} from 'react-icons/io5'

const SkeletonCard = () => {
    
    return(
        <div className="skeleton-card bgAnimation loaderAnimation">
            <IoReloadCircle className="loaderAnimation"/>
        </div>
    )
}

export default SkeletonCard