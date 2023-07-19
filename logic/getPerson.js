import { Person } from "../models/Person";

export async function getPerson() 
{
  try
  {
    let response = await fetch('https://randomuser.me/api/?results=2');
    let data = await response.json();
    const results = data.results;
    const personInfo = results [0];
    
    const person = results.map((personInfo) => {
      return new Person({
        firstName: personInfo.name.first,
        lastName: personInfo.name.last,
        picture: personInfo.picture.large,
      });
    });
    return person;
  } 
  catch (error) 
  {
    console.log('Error - ', error);
    return [];
  }
}