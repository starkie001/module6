import './BigCats.css';


export default function CatsList() {
  const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://cdn.pixabay.com/photo/2019/10/29/07/07/cheetah-4586252_640.jpg' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://cdn.pixabay.com/photo/2022/11/30/20/44/cougar-7627711_640.jpg' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://cdn.pixabay.com/photo/2024/04/22/13/08/jaguar-8712589_640.jpg' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://cdn.pixabay.com/photo/2023/05/11/15/35/panther-7986688_640.jpg' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://cdn.pixabay.com/photo/2014/02/28/19/42/lion-cub-277121_640.jpg' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://cdn.pixabay.com/photo/2023/07/17/13/50/baby-snow-leopard-8132690_640.jpg' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://cdn.pixabay.com/photo/2015/10/14/14/23/tiger-987678_640.jpg' },
  ];

  return (
    <ul className="cats-list">
      {cats.map((cat) => (
        <li key={cat.id} className="cat">
          <h2>{cat.name}</h2>
          <p className="latin">{cat.latinName}</p>
        </li>
      ))}
    </ul>
  );
}
