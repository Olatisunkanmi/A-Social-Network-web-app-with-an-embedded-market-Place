import imageIon from "../Assests/pro.jpg";
import { ChatBubble, FavoriteBorder, LiveTv, Image } from "@material-ui/icons";

export const notificationData = [
  {
    img: imageIon,
    name: "David Kim ",
    text: "commented on ",
    post: "your post ",
    extras: "",
    time: "30 minute ago",
    icon: <ChatBubble />,
  },
  {
    img: imageIon,
    name: "Daniel Wellington",
    text: "liked your ",
    post: "profile ",
    extras: "",
    time: "43 minutes ago",
    icon: <FavoriteBorder />,
  },
  {
    img: imageIon,
    name: "Stella Bergmann ",
    text: "shared a ",
    post: "new video ",
    extras: "on your wall ",
    time: "yesterday",
    icon: <LiveTv />,
  },
  {
    img: imageIon,
    name: "Elise Walker",
    text: "shared an ",
    post: "image ",
    extras: "you and 2 other people",
    time: "2 days ago",
    icon: <Image />,
  },
];
