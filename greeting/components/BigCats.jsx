export default CatsList;

function CatsList({ cats }) {

  const cats = [
{ id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus' },
{ id: 2, name: 'Cougar', latinName: 'Puma concolor' },
{ id: 3, name: 'Jaguar', latinName: 'Panthera onca' },
{ id: 4, name: 'Leopard', latinName: 'Panthera pardus' },
{ id: 5, name: 'Lion', latinName: 'Panthera leo' },
{ id: 6, name: 'Snow leopard', latinName: 'Panthera uncia' },
{ id: 7, name: 'Tiger', latinName: 'Panthera tigris' },
]  

  return (
    <ul className="CatsList">
      {cats.map((cat) => (
        <li key={cat.id} className="cat">
          <h2>{cat.name}</h2>
          <p>{cat.latinName}</p>
        </li>
      ))}
    </ul>
  );
}
