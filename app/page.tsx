"use client";
import { PersonInfo } from "@/common/types";
import Form from "../components/Form";
import Results from "../components/Result";
import { useState } from "react";

export default function HomePage() {
  const [personInfo, setPersonInfo] = useState<PersonInfo>({
    age: null,
    gender: null,
    country: null,
  });

  const handleResults = (results: PersonInfo) => {
    setPersonInfo(results);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-bold text-center my-4">
        Guess Age, Gender, and Country
      </h1>
      <Form onSubmit={handleResults} />
      <Results personInfo={personInfo} />
    </div>
  );
}
