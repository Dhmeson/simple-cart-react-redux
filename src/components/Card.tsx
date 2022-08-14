import {useDispatch } from 'react-redux'
import { cartItem } from '../redux/cartTypes'
import {addItem} from '../redux/stateReducer'
interface CardProps{
    img:string
    name:string 
    value:number
    id:string
}
export default function Card({img,id,name,value}:CardProps){  
    var item:cartItem={id:id,name:name,value:value,img:img,qtd:1}
    const dispatch = useDispatch()
    return(
    <div className="flex bg-white flex-col  min-w-[300px] p-4 items-center justify-center mt-3 rounded-lg">
        <img src={img} className=" w-44"/>
        <h1 className=" font-extrabold text-[1.6rem]">{name}</h1>
        <h2 className=" font-bold text-[1.3rem] italic">{"R$"+value}</h2>
        <button  onClick={() => dispatch(addItem(item))}  className=" bg-green-500  w-[150px] p-2 mt-2 rounded-lg text-white uppercase">Add</button>

    </div>
)}


