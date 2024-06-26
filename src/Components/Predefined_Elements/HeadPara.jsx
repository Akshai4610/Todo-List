export default function HeadPara({ head_2, para_3, children, ...props }) {
  return (
    <>
      <h2 className="text-xl font-bold text-stone-700 my-4" {...props}>
        {head_2}
      </h2>
      <p className="text-stone-600 mb-4">{children}</p>
      <p className="mt-8" {...props}>
        {para_3}
      </p>
    </>
  );
}
