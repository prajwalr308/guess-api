import { PersonInfo } from "@/common/types";
import { getPersonInfo } from "@/services/apiServices";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormProps {
  onSubmit: (personInfo: PersonInfo) => void;
}
function Form({ onSubmit }: FormProps) {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const results = await getPersonInfo(name);
      onSubmit(results);
    } finally {
      setIsLoading(false); 
    }

  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e:ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        placeholder="Enter a name"
        className="text_input peer text-ellipsis focus:outline-none focus:ring-2 focus:ring-amber-500"
        required
        disabled={isLoading}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-500"
      >
        {isLoading ? "Loading..." : "Guess"}
      </button>
    </form>
  );
}

export default Form;
