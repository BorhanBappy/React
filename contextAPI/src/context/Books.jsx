/* eslint-disable react/prop-types */
const Books = (props) => {
  const  {img,title,author}=props;
  console.log(props)
  return (
        <div className=" flex flex-col items-center justify-between gap-2">
         <img src={img} alt={img} />
         <h1>{author}</h1>
         <h2>{title}</h2>
        </div>
  );
};
export default Books;
