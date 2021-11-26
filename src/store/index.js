import { createStore } from 'vuex'

export default createStore({
  state: {
    productList: [{
      id: 1,
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      author: "@bkristastucchio",
      price: "500",
      quantity: 1,
  },
  {
      id: 2,
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
      author: "@rollelflex_graphy726",
      price: "600",
      quantity: 1,
  },
  {
      id: 3,
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
      author: "@helloimnik",
      price: "700",
      quantity: 1,
  },
  {
      id: 4,
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      author: "@nolanissac",
      price: "800",
      quantity: 1,
  },
  {
      id: 5,
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
      author: "@hjrc33",
      price: "900",
      quantity: 1,
  },
  {
      id: 6,
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
      author: "@arwinneil",
      price: "1000",
      quantity: 1,
  },
  {
      id: 7,
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
      author: "@tjdragotta",
      price: "100",
      quantity: 1,
  },
  {
      id: 8,
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
      author: "@katie_wasserman",
      price: "200",
      quantity: 1,
  },
  {
      id: 10,
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
      author: "@silverdalex",
      price: "300",
      quantity: 1,
  },
  {
      id: 11,
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
      author: "@shelleypauls",
      price: "400",
      quantity: 1,
  },
  {
      id: 12,
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
      author: "@peterlaster",
      price: "450",
      quantity: 1,
  },
  {
      id: 13,
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
      author: "@southside_customs",
      price: "550",
      quantity: 1,
  },
],
inCart:[],
  },
  getters: {
    productList: state => state.productList,
    inCart: state => state.inCart,
  },
  mutations: {
    ADD_TO_CART(state, id) { state.inCart.push(id); },
    INCREMENT(id)
    {
      const updateCart=this.state.inCart.map((curElem)=>{
        if(curElem.id===id){
          return{...curElem,quantity:curElem.quantity+1};
        }
        return curElem;
      });
      return{...this.state.inCart=updateCart};
    }
    },
  actions: {
    addToCart(context, id) { context.commit('ADD_TO_CART', id); },
    increment(context,id){context.commit('INCREMENT',id);},
  },
  modules: {
  }
})
