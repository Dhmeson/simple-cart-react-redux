import ItemCart from "../components/ItemCart";
//import icon from '../assets/sofa.jpg'
import { useSelector } from "react-redux";
import { cartItem } from "../redux/cartTypes";

export default function CartView(){
    const totalToPay:number = useSelector((state:any) => state.cart.cart.totalToPay)
    const listItems:cartItem[] = useSelector((state:any) => state.cart.cart.list)
    return(
    <div className="bg-gradient-to-b from-green-600 to-green-300 w-screen h-screen flex  items-center justify-center">
        <div className="flex flex-col space-y-4 h-screen w-full items-center justify-center p-4 md:w-2/4 md:justify-self-center">
            <div className="text-center font-bold text-[1.5rem] bg-white p-4 rounded-lg w-full uppercase ">your cart</div>
            
            {
               listItems.length>0 && listItems.map((item,key)=>{
                    return  <ItemCart id={item.id} name={item.name} qtd={item.qtd} value={item.value} img={item.img} key={key}/>
                })
            }
            <div className="w-full text-center font-bold text-[1.5rem] bg-white p-4 rounded-lg flex justify-between">
                <h1>TOTAL</h1>
                <h1>{"R$"+totalToPay.toFixed(2)}</h1>
            </div>

          
        </div>
        
    </div>
)}