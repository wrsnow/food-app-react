import Card from "./Card";
import styles from "./css_modules/MainWrapper.module.css";
import FastFoodJSON from "./db/FastFoodJSON";

export interface FoodMenu {
  id: string;
  name: string;
  price: number;
}

type JSONData = typeof FastFoodJSON;

const MainWrapper = () => {
  return (
    <div className={styles.main_wrapper}>
      {/* <div className={styles.bg_image}>
        <img src="./assets/rachel-park-hrlvr2ZlUNk-unsplash.jpg" alt="" />
      </div> */}
      <div className={styles.content}>
        {FastFoodJSON.map((food) => {
          return (
            <Card
              key={food.id}
              name={food.name}
              img={food.image}
              price={food.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainWrapper;
