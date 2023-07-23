import { Person } from "../models/person";

export async function getPerson() 
{
  try
  {
    let response = await fetch('https://randomuser.me/api/?results=2');
    let data = await response.json();
    const results = data.results;
    
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