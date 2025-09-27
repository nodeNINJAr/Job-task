import ProductDetails from "@/components/products/ProductDetails";

const ProductPage = async({
   params,
   } : {params:Promise<{productId:string}>
  }) => {

  const {productId} = await params;


   return (
      <>
          <ProductDetails productId={productId}/>
      </>
  )
}

export default ProductPage;