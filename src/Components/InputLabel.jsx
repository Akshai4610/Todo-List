export default function InputLabel({ Label, textArea, ...props }) {
  const className =
    "w-full p-1 border-b-2 rounded-ms border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {Label}
      </label>
      {textArea ? (
        <textarea className={className} {...props} />
      ) : (
        <input className={className} {...props} />
      )}
    </p>
  );
}
