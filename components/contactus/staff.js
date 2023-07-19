import { getPerson } from "../../logic/getPerson";

export  function staff(picture, firstName, lastName) {
  let staff = document.createElement('div');

  staff.innerHTML = `
    <div class="staff">
      <h1 id="staff-title">Still not sure? Contact our team and get close and personal</h1>
      <div class="staff-container">
        <div class="user">
          <div class="user-info">
            <img src="${picture}" alt="User Photo">
            <p class="userName">${firstName} ${lastName}</p>
            <p class="role">Sales Representative</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quae praesentium tenetur? Totam ad dolor
            nesciunt possimus voluptate nulla inventore id architecto provident accusantium?</p>
            <button class="contactButton">Contact me!</button>
          </div>
        </div>
      </div>
    </div>`;

    

  return staff;
}
