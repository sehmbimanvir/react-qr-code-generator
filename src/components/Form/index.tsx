import { FC, useRef } from "react";

type FormProps = {
  onSubmit: (e: IFormData) => void;
}

const Form: FC<FormProps> = ({
  onSubmit,
}: FormProps) => {

  const formRef = useRef<HTMLFormElement>(null);

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = (formRef.current?.elements.namedItem('url') as HTMLInputElement).value;
    const size  = Number((formRef.current?.elements.namedItem('size') as HTMLInputElement).value);

    onSubmit({
      url,
      size,
    });
  }

  return (
    <form
      ref={formRef}
      onSubmit={onHandleSubmit}
      id="generate-form"
      className="mt-4"
    >
      <input
        id="url"
        type="url"
        placeholder="Enter a URL"
        className="w-full border-2 border-gray-200 rounded p-3 text-grey-dark mr-2 focus:outline-none mb-5"
        required
      />

      <select
        data-testid="size"
        defaultValue="200"
        className="w-full border-2 border-gray-200 rounded p-3 text-grey-dark mr-2 focus:outline-none"
        name="size"
        id="size"
      >
        <option value="100">100x100</option>
        <option value="200">200x200</option>
        <option value="300">300x300</option>
      </select>
      <button
        className="bg-gray-600 rounded w-full text-white py-3 px-4 mt-5 hover:bg-black"
        type="submit"
      >
        Generate QR Code
      </button>
    </form>
  );
};

export default Form;
