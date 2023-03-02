import styles from "./Card.module.css";

const Card = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={image} alt={title} />
      <div className={styles.body}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
