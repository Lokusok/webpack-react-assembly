import css from './style.module.css';
import Image from '@/assets/images/preview.jpg';

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <article className={css.card}>
      <h3 className={css.title}>{title}</h3>
      <img className={css.preview} src={Image} alt="ёжик" />
      <a className={css.link} href="#">
        Перейти
      </a>
    </article>
  );
};

export default Card;
