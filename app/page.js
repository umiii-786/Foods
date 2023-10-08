"use client"

import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Items from './Components/Items'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from './Components/SideBar'

const page = () => {
  const Data = [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5",
      name: "Onion Pizza",
      price: 150,
      desc: "A delicious pizza topped with fresh onions for a delightful flavor combination. This pizza is perfect for onion lovers and offers a unique twist on the classic pizza experience. Enjoy the perfect blend of cheesy goodness and the sharp taste of onions in every bite. Whether you're sharing with friends or enjoying it all to yourself, this Onion Pizza is sure to satisfy your pizza cravings.",
      category: "Lunch",
      rating: 4.5,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"
  
    },
    {
      id: 2,
      img: "https://w7.pngwing.com/pngs/339/55/png-transparent-pizza-margherita-italian-cuisine-hot-dog-pizza-cheese-pizza-thumbnail.png",
      name: "Margherita Pizza",
      price: 130,
      desc: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil. Simple yet bursting with flavors, this Margherita Pizza is a timeless favorite that captures the essence of Italian cuisine.",
      category: "Lunch",
      rating: 4.2,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"

    },
    {
      id: 3,
      img: "https://w7.pngwing.com/pngs/21/55/png-transparent-pepperoni-pizza-margarita-pizza-margherita-italian-cuisine-tomato-pizza-food-cheese-recipe-thumbnail.png",
      name: "Pepperoni Pizza",
      price: 160,
      desc: "Indulge in the savory delight of this Pepperoni Pizza, loaded with slices of spicy pepperoni, melted cheese, and a tangy tomato sauce. A popular choice that's perfect for satisfying your pizza cravings.",
      category: "Lunch",
      rating: 4.6,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"
   
    },
    {
      id: 4,
      img: "https://w7.pngwing.com/pngs/569/109/png-transparent-pizza-with-vegetables-and-mushroom-toppings-sicilian-pizza-california-style-pizza-pizza-margherita-vegetarian-cuisine-pizza-food-recipe-gourmet-thumbnail.png",
      name: "Mushroom and Spinach Pizza",
      price: 140,
      desc: "Experience the earthy flavors of mushrooms combined with the freshness of spinach on this delightful pizza. Topped with a blend of cheeses, this Mushroom and Spinach Pizza offers a balanced and satisfying taste.",
      category: "Lunch",
      rating: 4.2,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"
    },
    {
      id: 5,
      img: "https://w7.pngwing.com/pngs/843/171/png-transparent-pizza-73-restaurant-catupiry-chicken-as-food-pizza-baked-goods-food-recipe-thumbnail.png",
      name: "BBQ Chicken Pizza",
      price: 170,
      desc: "Savor the smoky goodness of this BBQ Chicken Pizza, featuring tender pieces of chicken marinated in barbecue sauce, red onions, and a medley of cheeses. A fusion of flavors that's sure to delight your taste buds.",
      category: "Lunch",
      rating: 4.8,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"
     
    },
    {
      id: 6,
      img: "https://w7.pngwing.com/pngs/133/54/png-transparent-pancakes-served-on-plate-banana-pancakes-scrambled-eggs-breakfast-ihop-pancake-food-recipe-eating-thumbnail.png",
      name: "Classic Pancakes",
      price: 80,
      desc: "Start your day with a stack of fluffy pancakes served with maple syrup and a dollop of butter. A timeless breakfast favorite that's sure to satisfy your morning cravings.",
      category: "Breakfast",
      rating: 4.5,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"
   
    },
    {
      id: 7,
      img: "https://w7.pngwing.com/pngs/645/475/png-transparent-croissant-bread-croissant-muffin-brunch-bacon-egg-and-cheese-sandwich-bread-croissants-baked-goods-food-baking-thumbnail.png",
      name: "Egg and Bacon Croissant",
      price: 110,
      desc: "Indulge in a buttery croissant filled with scrambled eggs, crispy bacon, and melted cheese. A savory and satisfying breakfast option that's perfect for on-the-go mornings.",
      category: "Breakfast",
      rating: 4.2,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"
 
    },
    {
      id: 8,
      img: "https://w7.pngwing.com/pngs/683/103/png-transparent-frozen-yogurt-parfait-breakfast-yoghurt-fruit-salad-yogurt-frutti-di-bosco-food-breakfast-thumbnail.png",
      name: "Greek Yogurt Parfait",
      price: 95,
      desc: "Enjoy a healthy and refreshing breakfast with layers of creamy Greek yogurt, fresh berries, honey, and granola. A balanced option that provides a burst of flavors and energy.",
      category: "Breakfast",
      rating: 4.1,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"
     
    },
    {
      id: 9,
      img: "https://w7.pngwing.com/pngs/400/603/png-transparent-toast-tostytosty-la-tosteria-menu-food-dish-avocado-toast-food-toast-avocado-toast-thumbnail.png",
      name: "Avocado Toast",
      price: 120,
      desc: "Savor the creaminess of mashed avocado on toasted whole grain bread, topped with a sprinkle of sea salt and red pepper flakes. A trendy and nutritious breakfast choice.",
      category: "Breakfast",
      rating: 4.6,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"
     
    },
    {
      id: 10,
      img: "https://w7.pngwing.com/pngs/20/725/png-transparent-grain-bowl-breakfast-cereal-muesli-corn-flakes-bowl-granola-food-breakfast-recipe-thumbnail.png",
      name: "Fruit and Nut Oatmeal",
      price: 85,
      desc: "Warm up with a bowl of hearty oatmeal packed with mixed fruits, nuts, and a drizzle of honey. A wholesome breakfast that provides a satisfying start to your day.",
      category: "Breakfast",
      rating: 4.5,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"
    
    },
    {
      id: 11,
      img: "https://w7.pngwing.com/pngs/875/111/png-transparent-north-fish-seafood-dish-smoked-salmon-restaurant-grilled-fish-hd-soup-food-seafood-thumbnail.png",
      name: "Grilled Salmon",
      price: 190,
      desc: "Delight in a perfectly grilled salmon fillet seasoned with herbs and served with a side of roasted vegetables. A healthy and flavorful dinner option that's rich in omega-3 fatty acids.",
      category: "Dinner",
      rating: 4.5,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"
    
    },
    {
      id: 12,
      img: "https://w7.pngwing.com/pngs/756/828/png-transparent-taglierini-carbonara-fettuccine-alfredo-chicken-pasta-chicken-fillet-thumbnail.png",
      name: "Chicken Alfredo Pasta",
      price: 160,
      desc: "Indulge in creamy fettuccine Alfredo pasta with tender pieces of grilled chicken. This comforting dinner dish is a blend of pasta, rich Alfredo sauce, and savory chicken.",
      category: "Dinner",
      rating: 4.8,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"
    
    },
    {
      id: 13,
      img: "https://w7.pngwing.com/pngs/651/721/png-transparent-veggie-burger-vegetable-food-recipe-stir-frying-vegetables-frying-pan-frozen-vegetables-fruit-thumbnail.png",
      name: "Vegetable Stir-Fry",
      price: 130,
      desc: "Enjoy a medley of colorful vegetables stir-fried in a flavorful sauce, served over steamed rice. A light and nutritious dinner that's both satisfying and wholesome.",
      category: "Dinner",
      rating: 4.2,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"
   
    },
    {
      id: 14,
      img: "https://w7.pngwing.com/pngs/575/331/png-transparent-burrito-taco-bell-mexican-cuisine-chipotle-mexican-grill-menu-thumbnail.png",
      name: "Grilled Chicken Burrito Bowl",
      price: 160,
      desc: "Savor the flavors of a delicious burrito bowl with tender grilled chicken, black beans, rice, sautéed peppers and onions, shredded cheese, and a drizzle of zesty cilantro-lime dressing. A hearty and satisfying chicken dinner option.",
      category: "Dinner",
      rating: 4.6,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"
   
    },
    {
      id: 15,
      img: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
      name: "Mushroom Risotto",
      price: 175,
      desc: "Indulge in creamy and flavorful mushroom risotto, made with Arborio rice, sautéed mushrooms, and a touch of Parmesan cheese. A comforting and sophisticated dinner choice.",
      category: "Dinner",
      rating: 4.5,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"
     
    },
    {
      id: 16,
      img: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
      name: "Cheese and Crackers Platter",
      price: 120,
      desc: "Enjoy a variety of artisan cheeses, paired with an assortment of crispy crackers and complemented by fresh fruits and nuts. A delightful snack option for sharing or indulging in on your own.",
      category: "Snacks",
      rating: 4.3,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"
   
    },
    {
      id: 17,
      img: "https://w7.pngwing.com/pngs/204/32/png-transparent-crispy-fried-chicken-karaage-chicken-nugget-chicken-fingers-buffalo-wing-carrot-chilli-thumbnail.png",
      name: "Crispy Chicken Wings",
      price: 130,
      desc: "Savor the satisfying crunch of crispy chicken wings seasoned to perfection. Choose your favorite sauce, from tangy BBQ to spicy buffalo, for a flavorful snacking experience.",
      category: "Snacks",
      rating: 4.4,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"
   
    },
    {
      id: 18,
      img: "https://w7.pngwing.com/pngs/816/163/png-transparent-grilled-skewered-meat-bakery-paneer-tikka-indian-cuisine-vegetarian-cuisine-cake-food-baking-cake-decorating-thumbnail.png",
      name: "Paneer Tikka Skewers",
      price: 130,
      desc: "Enjoy succulent pieces of marinated paneer (Indian cottage cheese) skewered and grilled to perfection. Served with mint chutney, these paneer tikka skewers offer a flavorful and aromatic Indian snack experience.",
      category: "Snacks",
      rating: 4.9,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"
    
    },
    {
      id: 19,
      img: "https://w7.pngwing.com/pngs/356/675/png-transparent-falafel-lebanese-cuisine-take-out-mediterranean-cuisine-hummus-bed-miscellaneous-furniture-food-thumbnail.png",
      name: "Hummus and Veggie Platter",
      price: 90,
      desc: "Relish the smooth and flavorful hummus accompanied by a variety of fresh vegetable sticks and pita bread. A nutritious and satisfying option for a light and refreshing snack.",
      category: "Snacks",
      rating: 4.4,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"
    
   
    },
    {
      id: 20,
      img: "https://w7.pngwing.com/pngs/435/847/png-transparent-pincho-canape-skewer-fruit-others-thumbnail.png",
      name: "Fruit Skewers",
      price: 70,
      desc: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple, and more. A sweet and refreshing snack that's both delicious and visually appealing.",
      category: "Snacks",
      rating: 4.8,
      star:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFTnkZJrixLb3T1FID3463dWSdqxHCczUNw&usqp=CAU"
 
    },
  ];

  const [FoodData,setFoodData]=useState([]);
  const [orderitem, setorderitem] = useState([]);
  const [itemprice, setitemprice] = useState({ price: 0});
  const [searchval,setsearcchval]=useState("");
  const [sidebar, setsidebar] = useState({right: "-500px"})
  const All=()=>{
    setFoodData(Data); 
  }
  useEffect(()=>{
    All();
   },[])


const response=(e)=>{
        let text=e.target.innerText;
        setFoodData(()=>{
          return Data.filter((elemet)=>{
            return elemet.category.includes(text);
          })
        })
    
 }


 const search=(e)=>{
        let value=e.target.value;
        setsearcchval(value);
        if(searchval!="" && !searchval.startsWith(" ")){
          setFoodData(()=>{
            return Data.filter((elemet)=>{
               return elemet.name.includes(searchval);
            })
          })
        }
      
    }



  const showsidebar = () => {
    setsidebar({
      right: "0px"
    })
  }
  const hidesidebar = () => {
    setsidebar({
      right: "-500px"
    })
  }


  const itemsadd = (id) => {

    let item = FoodData.filter((ele) => {
      return ele.id == id;
    })

   
   let check=false;
    console.log("element which is finding at in list having id",item[0].id)
    if (orderitem.length > 0) {
      for (let i = 0; i < orderitem.length; i++) {
       console.log("checking with element id ",orderitem[i][0].id);
        if (item[0].id == orderitem[i][0].id) {
          check=true
        }
       
      }
     console.log(check)

      if (check) {

        console.log("item is already present ")
        toast.warning(`${item[0].name} Already Added`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

        return
        
      }
      else 
      {
      
   
        setorderitem((old) => { return [...old, item]; }) 
        setitemprice({
          price: itemprice.price + item[0].price
        })
      }
     
      
    }


    else {
      console.log("including first item")
  
      setorderitem((old) => {
        return [...old, item];
      })
      setitemprice({
        price: itemprice.price + item[0].price
      })

    }

     toast.success(`${item[0].name} Added `, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
   
  }

  const removeitem = (id) => {

    let priceremove = orderitem.filter((elemet) => {
      return elemet[0].id == id;
    })
    
   
    setitemprice({
      price: itemprice.price - priceremove[0][0].price
    })
    setorderitem(() => {
      return orderitem.filter((elemet) => {
        return elemet[0].id != id
      })
    })
       toast.info(`${priceremove[0][0].name} removed `, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

  }

//   const showtoaster=(type,name)=>{
//     console.log(name)
//     console.log(type)
//     let setmode;
//     if(type==="info"){
//       console.log("in type we have info")
// // setmode="light";
//     }
//     else if(type==="success"){
//       console.log("in type we have success")
//       // setmode="dark";
//     }
//     else{
//       console.log("in type we have erro")
//       // setmode="dark";
//     }
 
//   }


  return (
    <>
<ToastContainer/>
<Header searchval={searchval} search={search} response={response} all={All} />
<Items fooddata={FoodData} itemsadd={itemsadd}/>  
<SideBar  orderitem={orderitem} sidebar={sidebar} hidesidebar={hidesidebar} showsidebar={showsidebar} removeitem={removeitem} itemprice={itemprice}/>

    </>
  )
}

export default page
