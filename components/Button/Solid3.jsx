export default function ButtonSolid3({ name, shouldDisabled = false, ...rest}) {
  return (
    <button
      disabled={shouldDisabled}
      className="
        w-full h-12 px-4 py-3 bg-primary rounded-xl 
        group hover:bg-white 
        outline outline-1 outline-primary 
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
      "
      {...rest} 
    >
      <p
        className="
          text-center text-white text-sm font-medium 
          leading-normal group-hover:text-primary
        "
      >
        {name}
      </p>
    </button>
  );
}
