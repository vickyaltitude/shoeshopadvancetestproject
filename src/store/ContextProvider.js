import React,{useState} from 'react';

export const CartContext = React.createContext({
      products: [],
      cartItems: [],
      setProducts: ()=>{},
      setCartItems: ()=>{}
})



const ContextProvider = ({children}) => {

       const [products,setProducts] = useState([
        {
          id: 1,
          name: 'Product A',
          description: 'This is the description for Product A.',
          price: 100,
          large: 50,
          medium: 20,
          small: 10,
    
        },
        {
          id: 2,
          name: 'Product B',
          description: 'This is the description for Product B.',
          price: 200,
          large: 50,
          medium: 20,
          small: 10,
        },
        {
          id: 3,
          name: 'Product C',
          description: 'This is the description for Product C.',
          price: 150,
          large: 10,
          medium: 20,
          small: 0,
        },
        {
            id: 4,
            name: 'Product D',
            description: 'This is the description for Product d.',
            price: 150,
            large: 50,
            medium: 20,
            small: 10,
          }
      ])
       const [cartItems,setCartItems] = useState([ { prodId: 1, name: 'Product A', price: 100, large: 2,medium:1,small:3 },
        { prodId: 2, name: 'Product B', price: 200, large: 2,medium:1,small:3 },
        { prodId: 3, name: 'Product C', price: 150, large: 2,medium:1,small:3}])


        function handleAddToProducts(product){
            let id = products.length === 0 ? 1 : products.length + 1;

           const  addNewProd = {
                id:id,
                name: product.prodName,
                description: product.prodDesc,
                price: product.prodPrice,
                large: product.prodLarge,
                medium: product.prodMedium,
                small: product.prodSmall
             }
             setProducts((lastProducts)=> [...lastProducts,addNewProd])
          
        }

        function handleAddToCartLists(product,size){

              let updatedProd = products.map(prod => prod.name === product.name ? {...prod,[size]: Number(product[size]) - 1 } : prod);
              setProducts(()=> [...updatedProd])
              let findIndex = cartItems.findIndex(item => item.prodId === product.id);
              
              if(findIndex === -1){
                setCartItems((latestItems)=> [...latestItems,{prodId: product.id, name: product.name, price: product.price, [size] : 1}])
              }else{
                  let updatedCart = cartItems[findIndex];
                  updatedCart[size] = Number(updatedCart[size] || 0) + 1;
                  let newUpdatedCart = cartItems.map((item,ind) => ind === findIndex ? updatedCart : item )
                  setCartItems(() => [...newUpdatedCart])
                  console.log(updatedCart)
              }
        }

       const sendData = {
        products: products,
        cartItems: cartItems,
        setProducts: handleAddToProducts,
        setCartItems: handleAddToCartLists
       }


  return (
    <CartContext.Provider value={sendData}>
         {children}
    </CartContext.Provider>
  )
}

export default ContextProvider