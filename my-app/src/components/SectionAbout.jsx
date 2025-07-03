export default function SectionAbout(props) {
  return (
    <div className="h-screen w-4/10 flex flex-col items-center mt-20 gap-5 mx-auto">
      <img src={props.src} alt={props.title} className="w-3xs h-3xs " />
      <h2 className="font-bold text-2xl">{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}
