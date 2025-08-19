import { createSlice } from "@reduxjs/toolkit";
import img1 from '../../assets/images/contact/Icon Container.webp'
import img12 from '../../assets/images/contact/Vector.webp'
import img2 from '../../assets/images/contact/Icon Container (1).webp'
import img21 from '../../assets/images/contact/Vector (1).webp'
import img3 from '../../assets/images/contact/Icon Container (2).webp'
import img31 from '../../assets/images/contact/Vector (2).webp'
const initialState = {
    list :
[
    {
        id : 1,
        imgone: img1 ,
        imgtwo : img12 ,
        title: "Email",
        infobtn: "support@StyleLoom.com",
    },
    {
        id : 2,
        imgone: img2 ,
        imgtwo : img21,
        title: "Phone",
        infobtn: "+1 (555) 123-4567",
    },
    {
        id : 3,
        imgone: img3 ,
        imgtwo : img31,
        title: "Location",
        infobtn: "Get Direction",
    },

]
}

const CardContact = createSlice(
    {
        name : "CardContact",
        initialState,
         reducers:{

    }
    }
)
export default CardContact.reducer