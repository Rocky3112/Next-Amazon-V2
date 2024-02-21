export type OrderItem = {
    name: string
    slug: string
    image: string
    color: string
    size: string
    qty: number
    price: number
}
  
  export type ShippingAddress = {
    fullName: string
    address: string
    city: string
    postalCode: string
    country: string
  }