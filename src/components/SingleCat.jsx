import './BigCats.css';

export default function SingleCat({ name, latinName, image }) {
  return (
    <li className="cat">
      <img src={image} alt={name} className="cat-img" />
      <h2>{name}</h2>
      <p className="latin">{latinName}</p>
    </li>
  );
}


