// Functions to create staff container
export function staffIntro() {
  let staffIntro = document.createElement('div');
  staffIntro.classList.add('staff')

  staffIntro.innerHTML = `
      <h1 class="staff-title">Still not sure? Contact our team and get close and personal</h1>
      <div class="staff-container"></div>
    `;
  return staffIntro;
}

export  function staff(picture, firstName, lastName) { 
  let userDiv = document.createElement('div')
  userDiv.classList.add('user');

  userDiv.innerHTML = `
    <div class="user-info">
      <img src="${picture}" alt="User Photo">
      <p class="userName">${firstName} ${lastName}</p>
      <p class="role">Sales Representative</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quae praesentium tenetur? Totam ad dolor
      nesciunt possimus voluptate nulla inventore id architecto provident accusantium?</p>
      <button class="contactButton">Contact me!</button>
    </div>
  `;

  return userDiv;
}