import { PersonInfo } from "@/common/types";
import { getPersonInfo } from "@/services/apiServices";
import { FormEvent, useState } from "react";

interface FormProps {
  onSubmit: (personInfo: PersonInfo) => void;
}
function Form({ onSubmit }: FormProps) {
  const [name, setName] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const results = await getPersonInfo(name);
    onSubmit(results);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name"
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Guess
      </button>
    </form>
  );
}

export default Form;
