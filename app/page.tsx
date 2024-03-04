"use client";
import { PersonInfo } from "@/common/types";
import Form from "../components/Form";
import Results from "../components/Result";
import { useState } from "react";

//enchancement converting api calls to react query 
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
    <div>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
      <div className="container mx-auto px-4">
        <h1 className="text-xl font-bold text-center my-4">
          Guess Age, Gender, and Country
        </h1>
        <Form onSubmit={handleResults} />
        <Results personInfo={personInfo} />
      </div>
      </div>
    </div>
  );
}
