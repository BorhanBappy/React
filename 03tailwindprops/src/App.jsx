import Card from "./assets/components/card";

export default function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen gap-5">
        <h1 className="bg-green-800 inline-block text-4xl p-2 rounded ">
          Tailwind CSS
        </h1>
        <Card view="View Cart (1)" />
        <Card view="View Cart (2)" />
        <Card view="View Cart (3)" />
      </div>
    </>
  );
}
