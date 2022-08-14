import React from 'react';

import Card from '../components/Card';
import {BsCart4} from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate=useNavigate()
  const items=[
    {id:"1",name:"refrigerator",icon:"https://images-americanas.b2w.io/produtos/01/00/img/169241/9/169241977_1GG.jpg",value:100.99},
    {id:"2",name:"bed",icon:"https://images-americanas.b2w.io/produtos/2966579541/imagens/cama-box-casal-colchao-de-espuma-semi-ortopedico-extra-firme-resistente-cinza-138x188x52cm-suporta-8/2966579559_1_small.jpg",value:1.99},
    {id:"3",name:"telephone",icon:"https://images-americanas.b2w.io/produtos/01/00/img/3234381/2/3234381205_1GG.jpg",value:0.99}
  ]
  function GoCartPage(){
    navigate("/cart")
  }
  const total_items_in_cart = useSelector((state:any) => state.cart.cart.totalItems)
  return (
    <div className=" bg-gradient-to-b from-green-600 to-green-300 w-screen h-screen">
      <div className='w-full bg-green-400 p-4 flex  justify-end'>
          <BsCart4 onClick={GoCartPage} size={32} className="mr-4 cursor-pointer"/>
          <div className='  absolute bg-blue-500  w-[30px] h-[30px] rounded-full flex items-center justify-center right-1'><h2 className='text-white'>{total_items_in_cart}</h2></div>
      </div>
      <div className='flex flex-col items-center w-full md:flex-row md:justify-around md:mt-5'>
      {
        items.map((item,k)=>{
          return <Card id={item.id} img={item.icon} value={item.value} name={item.name} key={item.id}/>
        })
      }
      </div>
      
      
    </div>
  );
}

export default Home;
