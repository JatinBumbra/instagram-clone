import { Dispatch, SetStateAction, useState } from 'react';

const LoginInput = ({
  value,
  label,
  onChange,
  type = 'text',
}: {
  value: string;
  label: string;
  onChange: Dispatch<SetStateAction<string>>;
  type?: string;
}) => {
  const [inputType, setInputType] = useState<string>(type);

  return (
    <div className={`border bg-neutral-50 h-10 relative rounded`}>
      <label
        className={`block absolute left-3 transition-all text-neutral-400 ${
          value ? 'top-1' : 'top-1/2 -translate-y-1/2'
        }`}
        style={{ fontSize: value ? 11 : 14 }}
      >
        {label}
      </label>
      <input
        value={value}
        type={inputType}
        className={`bg-transparent outline-none block w-4/5 z-10 absolute top-1/2 ${
          value ? '-translate-y-1' : '-translate-y-1/2'
        } left-3 text-sm`}
        onChange={(e) => onChange(e.target.value)}
      />
      {type === 'password' && value ? (
        <p
          className='text-sm font-medium cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 z-20'
          onClick={() =>
            setInputType((prev) => {
              console.log(prev);
              return prev === type ? 'text' : type;
            })
          }
        >
          {inputType === 'text' ? 'Hide' : 'Show'}
        </p>
      ) : null}
    </div>
  );
};

export default LoginInput;
