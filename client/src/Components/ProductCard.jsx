import {
  FavoriteOutlined,
  LocalGroceryStoreSharp,
  MoreVertOutlined,
} from "@material-ui/icons";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ListItemIcon,
} from "@material-ui/core";
import { useStateContext } from "../Contexts/Context";
import "../App.css";

const ProductCard = ({ item }) => {
  const value = useStateContext();
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={item.img}
          alt={item.name}
          loading="lazy"
        />
        <CardContent>
          <h4 className="font-bold text-lg">{item.name}</h4>
          <p>{item.text}</p>
        </CardContent>
        <CardActions className="flex flex-col gap-y-2">
          <div className="flex flex-row justify-between w-full">
            <button className="flex gap-x-1 items-center cursor-pointer">
              <div
                onClick={() => {
                  value.productDispatch({
                    type: "INCREASE_LIKES",
                    payload: item,
                  });
                }}
              >
                <FavoriteOutlined className="text-red-500" />
              </div>
              <span>{item.likes}</span>
            </button>
            <button className="bg-blue-400 px-2 rounded-md text-white py-1 flex gap-x-1 items-center cursor-pointer">
              <LocalGroceryStoreSharp />
              <span>${item.price}.00</span>
            </button>
          </div>
          {value.productState.cart.some((x) => x.name === item.name) ? (
            <button
              className="cursor-pointer text-white bg-blue-500 w-full py-1 rounded"
              onClick={() => {
                value.productDispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item,
                });
              }}
            >
              Remove to Cart
            </button>
          ) : (
            <button
              className="cursor-pointer text-white bg-blue-500 w-full py-1 rounded"
              onClick={() => {
                value.productDispatch({ type: "ADD_TO_CART", payload: item });
              }}
            >
              Add from cart
            </button>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
