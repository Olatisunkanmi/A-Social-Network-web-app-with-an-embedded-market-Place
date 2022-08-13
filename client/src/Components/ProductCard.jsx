import {
  FavoriteOutlined,
  LocalGroceryStoreSharp,
  MoreVertOutlined,
} from "@material-ui/icons";
import { Card, CardActions, CardContent, CardMedia } from "@material-ui/core";
import "../App.css";

const ProductCard = ({ item }) => {
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={item.img}
          alt={item.name}
        />
        <CardContent>
          <h4 className="font-bold text-lg">{item.name}</h4>
          <p>{item.text}</p>
        </CardContent>
        <CardActions className="flex flex-row justify-between">
          <button className="flex gap-x-1 items-center cursor-pointer">
            <FavoriteOutlined className="text-red-500" />
            <span>{item.likes}</span>
          </button>
          <button className="bg-blue-400 px-2 rounded-md text-white py-1 flex gap-x-1 items-center cursor-pointer">
            <LocalGroceryStoreSharp />
            <span>${item.price}.00</span>
          </button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
