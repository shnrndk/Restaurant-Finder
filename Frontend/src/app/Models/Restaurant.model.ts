export interface Restaurant{
    reg_no: Number,
    restaurant_name: String,
    discription:String,
    owner_name: String,
    NIC: String,
    streetAddress1:String,
    streetAddress2:String,
    city:String,
    phone_no: String,
    owner_pics:String,
    customer_pics:String,
    reviews:{
        id:String,
        review:String
    }
}
