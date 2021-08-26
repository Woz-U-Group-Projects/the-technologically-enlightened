import "./CartScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

import CartItem from "../components/CartItem";

import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
	const dispatch = useDispatch();

	const cart = useSelector(state => state.cart);
	const { cartItems } = cart;

	useEffect(() => {}, []);

	const qtyChangeHandler = (id, qty) => {
		dispatch(addToCart(id, qty));
	};

	const removeFromCartHandler = id => {
		dispatch(removeFromCart(id));
	};

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
	};

	const getCartSubTotal = () => {
		return cartItems
			.reduce((price, item) => price + item.price * item.qty, 0)
			.toFixed(2);
	};

	function handleToken(token, addresses) {
		console.log({ token, addresses });
	}

	return (
		<body>
			<div className="cartscreen">
				<div className="cartscreen__left">
					<h2>Shopping Cart</h2>

					{cartItems.length === 0 ? (
						<div>
							Your Cart Is Empty <Link to="/">Go Back</Link>
						</div>
					) : (
						cartItems.map(item => (
							<CartItem
								key={item.product}
								item={item}
								qtyChangeHandler={qtyChangeHandler}
								removeHandler={removeFromCartHandler}
							/>
						))
					)}
				</div>

				<div className="cartscreen__right">
					<div className="cartscreen__info">
						<p>Subtotal ({getCartCount()}) items</p>
						<p>${getCartSubTotal()}</p>
					</div>
					<div className="stripe">
						<StripeCheckout
							stripeKey="pk_test_51JNQmDGLWvuISMHnG42cOFSuOE1c1d5FO6zcS58rB9MA2LnfJaHobDg3WWAKgxP6xF0xY5Q45GUDz2iNN1b1ZrEH00JGTY7d9c"
							token={handleToken}
						/>
					</div>
				</div>
			</div>
		</body>
	);
};

export default CartScreen;
