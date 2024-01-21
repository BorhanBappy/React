import Form from "./components/form";
import data from "./../../Zpractice/data";
function App() {
  return (
    <>
      <Form />
      {data.map((book, index) => {
        return (
          <li key={index}>
            {" "}
            {book.title} {book.id}
          </li>
        );
      })}
    </>
  );
}

export default App;
