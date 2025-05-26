import {create } from 'zustand'
export const useProductStore = create((set)=>
({
    products:[],
    setProducts:(products)=>set({products}),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image){
            return {success:false,message:"Please fill all the fields"}
        }
        const res = await fetch("/api/products",{ 
            method: "post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newProduct)
        })
        const data = await res.json();
        if (data.success) {
            // Fetch all products after successful creation
            const productsRes = await fetch("/api/products");
            const productsData = await productsRes.json();
            set({products: productsData.data});
        }
        return {success:data.success,message:data.message}
    },
   
    fetchProducts: async () => {
        try {
            const res = await fetch("/api/products");
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            set({products: data.data});
        } catch (error) {
            console.error("Failed to fetch products:", error);
            set({products: []});
        }
    },

    deleteProduct:async (id)=>{
        const res = await fetch(`/api/products/${id}`,{
            method:"delete",
        })
        const data = await res.json();
        if (!data.success){
            return {success:false,message:data.message}
        }
        set((state)=>({products:state.products.filter((product)=>product._id !== id)}))
        return {success:true,message:"Product deleted successfully"}

    },
    updateProduct:async (id,updatedProduct)=>{
        const res = await fetch(`/api/products/${id}`,{
            method:"put",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updatedProduct)
        })
        const data = await res.json();
        if (!data.success){
            return {success:false,message:data.message}
        }
        set((state)=>({products:state.products.map((product)=>product._id!== id? data:data , product)}))
        return {success:true,message:"Product updated successfully"}
        
    }

})

      
)
