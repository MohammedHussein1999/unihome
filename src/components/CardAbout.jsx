export default function CardAbout() {
  return (
    <div className=" p-10 w-72 flex flex-col bg-blue-500 text-white rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <h2 className="mb-2 text-xl font-medium leading-tight  dark:text-neutral-50">
        Name
      </h2>
      <p className="mb-4  text-base  dark:text-neutral-200">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
  );
}
