export async function getPerson()
{
    fetch("https://randomuser.me/api/?results=2")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const user = data.results
        createUser(user)
        createCard(user)
    })
    .catch((error) => {
        console.error(error);
        return error;
    });


    function createUser(user)
    {
        for(let i=0; i < user.length; i++)
        {
            const UserImg = document.createElement("img")
            UserImg.src = user[i].picture.large
            document.body.appendChild(UserImg)

            const UserName = document.createElement("h3")
            UserName.textContent = "Name: " + user[i].name.first + " " + user[i].name.last
            document.body.appendChild(UserName)       
        }
    }
}