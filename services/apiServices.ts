import { PersonInfo } from "@/common/types";

const fetchAge = async (name:string) => {
    const response = await fetch(`https://api.agify.io?name=${name}`);
    const data = await response.json();
    return data.age;
  };
  
  const fetchGender = async (name:string) => {
    const response = await fetch(`https://api.genderize.io?name=${name}`);
    const data = await response.json();
    return data.gender;
  };
  
  const fetchCountry = async (name:string) => {
    const response = await fetch(`https://api.nationalize.io?name=${name}`);
    const data = await response.json();
    return data.country[0]?.country_id;
  };

  const getPersonInfo = async (name: string): Promise<PersonInfo> => {
    try {
      const [age, gender, country] = await Promise.all([
        fetchAge(name),
        fetchGender(name),
        fetchCountry(name),
      ]);
  
      return {
        age: age || null,
        gender: gender || null,
        country: country || null, 
      };
    } catch (error) {
      console.error("Error fetching person info:", error);
      return { age: null, gender: null, country: null }; 
    }
  };
  
  
  export { fetchAge, fetchGender, fetchCountry,getPersonInfo };
  