import Card from "./Card";
import styles from "./css_modules/MainWrapper.module.css";
import { Quantity } from "./Card";
import Food_Menu from "./db/Food_Menu";

export interface FoodMenu {
  id: string;
  foodName: string;
  price: number;
  description: string;
}

type Props = {
  total: Quantity[];
  setTotal: React.Dispatch<React.SetStateAction<Quantity[]>>;
};

const MainWrapper = ({ total, setTotal }: Props) => {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.bg_image}>
        <img src="./assets/rachel-park-hrlvr2ZlUNk-unsplash.jpg" alt="" />
      </div>
      <div className={styles.content}>
        {Food_Menu.map((food: FoodMenu) => {
          return (
            <Card
              key={food.id}
              id={food.id}
              name={food.foodName}
              price={food.price}
              description={food.description}
              total={total}
              setTotal={setTotal}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainWrapper;
