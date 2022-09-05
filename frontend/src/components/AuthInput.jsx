export default function AuthInput({label, type, name, placeholder, onChange, value}) {
  return (
    <div className={"w-full"}>
      <label className={"text-secondary-text"}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} onChange={onChange} value={value}
             className={"bg-slate-900 text-secondary-text placeholder:text-tertiary-text " +
               "outline-none border-2 border-transparent focus:border-sky-800 rounded-lg " +
               "w-full text-xl leading-7 py-2 px-4 mt-1"}
      />
    </div>
  );
};