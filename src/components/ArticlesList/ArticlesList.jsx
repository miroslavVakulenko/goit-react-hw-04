export default function ArticlesList({ items }) {
  console.log(items);
  return (
    <ul className="css.list">
      {items.map(item => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
