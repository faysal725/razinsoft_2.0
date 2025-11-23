'use client'
export default function InputText2({
  label,
  title,
  type = "text",
  value,
  required = false,
  errorMsg = "",
  onChange,
  ...props
}) {
  return (
    <div className="relative w-full flex flex-col justify-between">
      <label htmlFor={label} className="block text-nBlack text-sm sm:text-lg text-start leading-relaxed font-medium capitalize"
      >
        <span>{title}</span>
        {
          required &&
          <span className="input-required-tag text-nError">*</span>
        }
      </label>

      <input
        id={label}
        name={label}
        type={type}
        value={value}        // controlled
        onChange={onChange}
        {...props}
        className="h-10 sm:h-14 w-full pl-3 sm:pl-4 block rounded-lg placeholder:text-slate-500 text-xs sm:text-base font-normal outline outline-1 outline-offset-[-1px] outline-nGray-300 mt-1 sm:mt-3 placeholder:text-xs sm:placeholder:text-base"
        required={required}
      />

      sdfsdf
    <div>
      <p className="text-xs text-red-500 text-start mt-1">{ errorMsg }</p>
    </div>
    </div>
  )
}
