"use client";

export default function Dropdown2({
    label,
    title,
    value,
    required = false,
    returnValue = "value",
    showValue = 'value',
    errorMsg = "",
    onChange,
    options = [],
    ...props
}) {
    return (
        <div className="relative w-full flex flex-col justify-between">
            <label
                htmlFor={label}
                className="block text-nBlack text-sm sm:text-lg text-start leading-relaxed font-medium capitalize"
            >
                <span>{title}</span>
                {required && <span className="input-required-tag text-nError">*</span>}
            </label>

            <div className="relative mt-1 sm:mt-3">
                <select
                    id={label}
                    name={label}
                    value={value}
                    onChange={onChange}
                    required={required}
                    {...props}
                    className="h-10 sm:h-14 w-full pl-3 sm:pl-4 block rounded-lg text-xs sm:text-base font-normal outline outline-nGray-300 bg-white cursor-pointer"
                >
                    <option value="" disabled>
                        Select {title}
                    </option>

                    {options.map((opt, i) => (
                        <option key={i} value={opt[returnValue]}>
                            {opt[showValue]}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <p className="text-xs text-red-500 text-start mt-1">{errorMsg}</p>
            </div>
        </div>
    );
}
