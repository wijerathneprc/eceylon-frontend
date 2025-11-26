
// import { useEffect, useRef, useState } from 'react';

// import axios from 'axios';
// import FormData from 'form-data';

import { BrandFilter } from './brand_filter/BrandFilter';
import { CategoryFilter } from './category_filter/CategoryFilter';
import './Sidebar.css';





export function Sidebar() {


    return (<>
        <div className='sidebar-store'>
            <BrandFilter />
            <hr />
            <CategoryFilter />

        </div>


    </>)
}