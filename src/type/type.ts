
export interface IProduct {
    id:string,
    productName:string,
    description:string,
    price:number,
    stock:number,
    images:[string],
    categoryId:string,
    isDeleted:boolean
}