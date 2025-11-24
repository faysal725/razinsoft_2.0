'use client'

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import { useState } from "react";

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

  const [currentType, setCurrentType] = useState(type);


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

      <div className="relative mt-1 sm:mt-3 ">
        <input
          id={label}
          name={label}
          type={currentType}
          value={value}        // controlled
          onChange={onChange}
          {...props}
          className="h-10 sm:h-14 w-full pl-3 sm:pl-4 block rounded-lg placeholder:text-slate-500 text-xs sm:text-base font-normal outline outline-1 outline-offset-[-1px] outline-nGray-300 placeholder:text-xs sm:placeholder:text-base"
          required={required}
        />

        {
          type === 'password' &&
          <div className="absolute h-full top-0 right-0 pr-3 flex items-center">
            {
              currentType === 'password' ?
                <EyeIcon className="h-5 w-5 text-nGray-500" onClick={() => setCurrentType('text')} />
                :
                <EyeSlashIcon className="h-5 w-5 text-nGray-500" onClick={() => setCurrentType('password')} />
            }
          </div>
        }
      </div>
      <div>
        <p className="text-xs text-red-500 text-start mt-1">{errorMsg}</p>
      </div>
    </div>
  )
}
