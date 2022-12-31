import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const PrimaryBtn = ({children}) => {
    return <button className="btn btn-primary text-white rounded-sm">{children} <HiArrowNarrowRight className='ml-1' /></button>;
};

export default PrimaryBtn;