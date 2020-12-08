import { useRouter } from "next/router";
import { Img } from "../components/CardsLinks/style";

export default function Card() {
  const router = useRouter();

  return (
    <div>
      <Img src="./img/housing-type.jpg"></Img>
      <p>This is {router.query.cardId}</p>
    </div>
  );
}
