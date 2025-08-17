import './BigCats.css';
import cats from './catsData';

export default function SingleCat({ name }) {

  const cat = cats.find(c => c.name === name);
  if (!cat) return <div>Cat not found.</div>;

  return (
    <li className="cat">
      <img src={cat.image} alt={cat.name} className="cat-img" />
      <h2>{cat.name}</h2>
      <p className="latin">{cat.latinName}</p>
    </li>
  );
}


