import ReviewCardSkeleton from '@/components/skeletons/ReviewCardSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='grid my-5 grid-cols-4 gap-5'>
            {
                [...Array(12)].map((_,index)=> <ReviewCardSkeleton key={index}></ReviewCardSkeleton>)
            }
        </div>
    );
};

export default loading;