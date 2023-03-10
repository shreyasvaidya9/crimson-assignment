import { useEffect, useState } from "react";
import Links from "../../components/Links";
import Card from "../../components/UI/Card";

import styles from "./Home.module.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setData(data.products);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Links />
      <main>
        <h1 className={styles.heading}>Knowledge Base</h1>
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>Something Went Wrong!</h1>
        ) : (
          <div className={styles.cardList}>
            {data?.map(({ id, title, description, thumbnail }) => (
              <Card
                key={id}
                image={thumbnail}
                title={title}
                description={description}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
