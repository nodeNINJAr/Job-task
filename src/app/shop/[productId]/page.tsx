

const ProductDetails = async({
   params,
   } : {params:Promise<{productId:string}>
  }) => {

  const {productId} = await params;

 
  console.log(await params);

   return (
    <div>
        <h1 className="text-4xl text-green-400">ProductDetails product id : {productId}</h1>
    </div>
  )
}

export default ProductDetails