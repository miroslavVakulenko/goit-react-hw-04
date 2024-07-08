export default function ArticlesList({ items }) {
  return (
    <ul className="css.list">
      {items.map(item => (
        <li key={item.objectID}>
          <a href={item.url} target="blank">
            {item.title}
          </a>
          {/* <p>{item.body}</p> */}
        </li>
      ))}
    </ul>
  );
}
