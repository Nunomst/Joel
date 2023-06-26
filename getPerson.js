export async function getPerson() {
    fetch("https://randomuser.me/api/?results=2")
      .then((response) => response.json())
      .then((data) => {
        const user = data.results;
        createUser(user);
      })
      .catch((error) => {
        console.error(error);
        return error;
      });
  
      function createUser(user) {
        const usersContainer = document.querySelector(".users-container");
      
        for (let i = 0; i < user.length; i++) {
          const userContainer = document.createElement("div");
          userContainer.classList.add("user");
      
          const userDiv = document.createElement("div");
          userDiv.classList.add("user-info");
      
          const userImg = document.createElement("img");
          userImg.src = user[i].picture.large;
          userImg.alt = "User Photo";
          userDiv.appendChild(userImg);
      
          const userName = document.createElement("p");
          userName.textContent = user[i].name.first + " " + user[i].name.last;
          userName.classList.add("userName")
          userDiv.appendChild(userName);

          const role = document.createElement("p")
          role.textContent = "Sales Representative"
          role.classList.add("role")
          userDiv.appendChild(role);

          const description = document.createElement("p")
          description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quae praesentium tenetur? Totam ad dolor nesciunt possimus voluptate nulla inventore id architecto provident accusantium?";
          userDiv.appendChild(description);

          const contact = document.createElement("button")
          contact.textContent = "Contact me!"
          contact.classList.add("contactButton")
          userDiv.appendChild(contact);
      
          userContainer.appendChild(userDiv);
          usersContainer.appendChild(userContainer);
        }
    }
      
}