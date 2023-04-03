export const findProductInCart = (cart, prodId) => {
  const isProductInCart =
    cart && cart.length > 0 && cart.some(({ _id }) => _id === prodId);
  return isProductInCart;
};
