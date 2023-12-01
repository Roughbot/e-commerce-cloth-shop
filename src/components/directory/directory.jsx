import "./directory-styles.scss";
import DirectoryItem from "../directory-item/directory-item";

const Directory = ({ containers }) => {
  return (
    <div className="directory-container">
      {containers.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
