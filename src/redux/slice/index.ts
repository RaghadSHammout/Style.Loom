import { createSlice } from "@reduxjs/toolkit";
import img1 from  '../../assets/images/home/Icon Container.webp'
import img2 from  '../../assets/images/home/Icon Container (1).webp'
import img3 from  '../../assets/images/home/Icon Container (2).webp'
import img4 from  '../../assets/images/home/Icon Container (3).webp'
import img5 from  '../../assets/images/home/Icon Container (4).webp'
import img6 from  '../../assets/images/home/Icon Container (5).webp'
import img7 from  '../../assets/images/home/Vector (3).webp'
import img8 from  '../../assets/images/home/Icon.webp'
import img9 from  '../../assets/images/home/Vector (4).webp'
import img10 from  '../../assets/images/home/Vector (1).webp'
import img11 from  '../../assets/images/home/Vector.webp'
import img12 from  '../../assets/images/home/Union.webp'
import img13 from '../../assets/images/contact/Icon Container (3).webp'
import img14 from '../../assets/images/contact/Icon Container (4).webp'
import img15 from '../../assets/images/contact/Icon Container (5).webp'
import img16 from '../../assets/images/contact/Icon Container (6).webp'
import img17 from '../../assets/images/contact/Icon Container (7).webp'
import img18 from '../../assets/images/contact/Icon Container (8).webp'
const initialState = {
        cardone :[
            {
               img: img1 , 
               img2 : img7 , 
               title : "Passionate Craftsmanship",
                description : "Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.",
            },
            {
               img: img2 , 
               img2 : img8, 
               title : "Fashion Forward",
                description : "We're more than a brand; we're trendsetters, curating styles that empower and inspire confidence.",
            },
            {
               img: img3 , 
               img2 : img9, 
               title : "Customer-Centric Approach",
                description : "At StyleLoom, our customers are at the heart of everything we do. Your satisfaction is our measure of success.",
            },
            {
               img: img4 ,
               img2 : img10,  
               title : "Global Inspiration",
                description : "Influenced by global trends, we bring you a diverse and dynamic collection, embodying the spirit of fashion from around the world.",
            },
            {
               img: img5, 
               img2 : img11, 
               title : "Empowering Your Style",
                description : "Beyond clothing, StyleLoom is a lifestyle. Join us on a journey of self-expression and empowerment through fashion.",
            },
            {
               img: img6, 
               img2 : img12, 
               title : "Sustainable Practices",
                description : "StyleLoom is committed to sustainability, integrating eco-friendly practices into our production process.",
            }
        ],
        cardtwo : [
            {
                steps : "Step 01",
                title : "Discover Trends",
                description: "Explore our curated collection of over 1000 styles, spanning global fashion trends."
            },
            {
                steps : "Step 02",
                title : "Effortless Navigation",
                description: "Intuitive filters and categories help you find the perfect pieces tailored to your style."
            },
            {
                steps : "Step 03",
                title : "Secure Checkout",
                description: "Multiple payment options and encrypted transactions ensure a safe and hassle-free purchase."
            },
            {
                steps : "Step 04",
                title : "Unbox Happiness",
                description: "Unbox a fashion-forward experience delivered right to your door, ready to elevate your style."
            }
        ], 
        cardthree : [
            {
                img:img13 ,
                title: "Eligibility",
                description : "Items must be unused, with tags attached."
            }, 
            {
                img: img14 ,
                title: "Process",
                description : "Initiate returns through our Return Center for a smooth process."
            }, 
            {
                img:img15 ,
                title: "Refund",
                description : "Expect a refund to your original payment method within 7-10 days."
            }, 
            {
                img: img16,
                title: "Cancellation Window",
                description : "Orders can be canceled within 24 hours of placement for a full refund."
            }, 
            {
                img: img17,
                title: "Cancellation Process",
                description : "Visit our Order Management section to cancel your order effortlessly."
            }, 
            {
                img: img18 ,
                title: "Refund Timeline",
                description : "Refunds for canceled orders are processed within 5-7 business days."
            }, 

        ]
    }
const InfoCards = createSlice({
    name: "cards" , 
    initialState,
    reducers:{

    }
})
export default InfoCards.reducer;