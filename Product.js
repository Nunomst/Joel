export class Product
{
  #category
  #description
  #id
  #image
  #price
  #rating
  #title


  constructor(category, description, id, image, price, rating, title) 
  {
    this.#category = category;
    this.#description = description;
    this.#id = id;
    this.#image = image;
    this.#price = price;
    this.#rating = rating;
    this.#title = title;
  }
}