import "./Tag.css";

export default function Tag({ tag }) {
  const highlightClass = tag === "admin" ? "Tag--highlight" : "";
  return <li className={`tag ${highlightClass}`}>{tag}</li>;
}
