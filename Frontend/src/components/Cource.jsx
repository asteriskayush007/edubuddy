import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import List from '../../public/list.json'
import Cards from './Cards';
import { Link } from 'react-router-dom';

function Cource() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-200 dark:text-black'>
            <div className='mt-28 items-center justify-center text-center'>
                <h1 className='text-2xl md:text-4xl'>We are delighted to have you <span className='text-pink-500'>Here :)</span></h1>
                <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis animi quaerat dolorum dignissimos atque aliquid aut exercitationem omnis corrupti, porro eum ipsa reprehenderit voluptates nemo optio reiciendis architecto nostrum! Voluptate asperiores amet dolorem culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel neque repellendus ex. Voluptates, corporis. Sequi nostrum voluptas sit fugit repudiandae molestiae possimus debitis doloremque illo?</p>
                <Link to={'/'}>
                    <button className='text-white px-5 py-3 bg-sky-500 rounded-2xl mt-10'>Back</button>
                </Link>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
                {
                    List.map((item)=>(
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Cource;
