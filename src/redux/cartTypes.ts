export interface cartItem{
    id:string 
    name:string
    value:number
    img?:any
    qtd:number
}
export interface cartReducerProps{
    list:cartItem[] 
    totalItems:number
    totalToPay:number
    
}