import CartItemCard from './CartItemCard.tsx';
import { CartItem } from '../../types.ts';

interface CartItemCardProps {
  item: CartItem;
  updateQuantity: (productId: string, newQuantity: number) => void;
  removeFromCart: (productId: string) => void;
}

const CartItemCardWrapper = (props: CartItemCardProps) => {
  const getAppliedDiscount = (item: CartItem) =>
    item.product.discounts
      .filter((discount) => item.quantity >= discount.quantity)
      .reduce((max, discount) => Math.max(max, discount.rate), 0);

  const appliedDiscount = getAppliedDiscount(props.item);

  return <CartItemCard {...props} discount={appliedDiscount} />;
};

export default CartItemCardWrapper;
