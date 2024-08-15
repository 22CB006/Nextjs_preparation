//////////////////////////////////////  DYNAMIC ROUTING  //////////////////////////////////////

export default function ProductDetails({params}:
    {
       params : { productId : string};
    }){
        return <h1> Details of product {params.productId}</h1>
    }