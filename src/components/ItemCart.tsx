import { useDispatch } from 'react-redux'
import { addItem,removeItem} from '../redux/stateReducer'
import { cartItem } from '../redux/cartTypes'
import {AiOutlinePlus} from 'react-icons/ai'
import {RiSubtractLine} from 'react-icons/ri'
export default function ItemCart({name,id,qtd,value,img}:cartItem){
    const product:cartItem={id,name,qtd,value,img}
    
    const dispatch = useDispatch()
    return(
        <>
        {
            qtd>0 && <div className=' bg-blue-300 flex w-full p-4 rounded-lg '>
            <img src={img} className=" max-w-[100px]"></img>
            <div className='flex flex-col  bg-white flex-1 items-center justify-center'>
                <h1 className=' font-bold'>{name}</h1>
                <h2>{value}</h2>
            </div>
            <div className='flex flex-col items-center justify-around ml-2'>
                <h1>QTD {qtd}</h1>
                <div className='flex justify-around'>
                    <div className=' bg-red-600 w-[70px] p-2 rounded-lg text-white flex items-center justify-center cursor-pointer ' onClick={() => dispatch(removeItem(product))}>
                        <RiSubtractLine size={32} color="white"/>
                    </div>
                    <div className=' bg-green-500 w-[70px] p-2 rounded-lg text-white flex items-center justify-center cursor-pointer' onClick={() => dispatch(addItem(product))}>
                        <AiOutlinePlus size={32}/>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
       
    )
}