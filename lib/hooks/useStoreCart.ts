import { createContext, useContext, useState } from "react";
import { OrderItem } from "../modals/OrderModal";
import { round2 } from "../utils";

type Cart = {
  items: OrderItem[];
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
};

const initialState: Cart = {
  items: [],
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
};

const CartContext = createContext<Cart>(initialState);

export const useCartProvider = () => {
  const [cart, setCart] = useState<Cart>(initialState);

  const increase = (item: OrderItem) => {
    const exist = cart.items.find((x) => x.slug === item.slug);
    const updatedCartItem = exist
      ? cart.items.map((x) => (x.slug === item.slug ? { ...exist, qty: exist.qty + 1 } : x))
      : [...cart.items, { ...item, qty: 1 }];

    const { itemsPrice, taxPrice, shippingPrice, totalPrice } = calcPrice(updatedCartItem);

    setCart({
      ...cart,
      items: updatedCartItem,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
  };

  const calcPrice = (items: OrderItem[]) => {
    const itemsPrice = round2(items.reduce((acc, item) => acc + item.price * item.qty, 0));
    const shippingPrice = round2(itemsPrice > 100 ? 0 : 100);
    const taxPrice = round2(Number(0.1 * itemsPrice));
    const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

    return { itemsPrice, taxPrice, shippingPrice, totalPrice };
  };

  return { ...cart, increase };
};

export const useCart = () => useContext(CartContext);
