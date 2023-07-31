// Function to create info div
export function info(){
    let info = document.createElement('div');
    info.innerHTML = `
    <h1 class="info-title">Contact us</h1>
    <div class="info">
        <div class="form">
            <form action="">
            <br>
            <input type="text" class="name" name="name" value="" required placeholder="Name" oninvalid="setCustomValidity('Campo obrigatório')" oninput="setCustomValidity('')"><br><br>
            <input type="text" class="company" name="company" value="" required placeholder="Company" oninvalid="setCustomValidity('Campo obrigatório')" oninput="setCustomValidity('')"><br><br>
            <input type="email" class="email" name="email" value="" required placeholder="Email" oninvalid="setCustomValidity('Campo obrigatório')" oninput="setCustomValidity('')"><br><br>
            <textarea name="message" class="message" cols="30" rows="10" required placeholder="Write your message here..." oninvalid="setCustomValidity('Campo obrigatório')" oninput="setCustomValidity('')"></textarea><br><br>
            <button type="submit" class="send button-container">Send</button><br>
            </form>
        </div>
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.3377058058095!2d-8.643015823376942!3d41.25798240401109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2467ea8b0012d9%3A0x5a575ae402fe35ee!2sR.%20Maria%20Cust%C3%B3dia%20da%20Silva%2039%2C%204470-460%20Campos%20Verdes!5e0!3m2!1spt-PT!2spt!4v1686883419299!5m2!1spt-PT!2spt"
            width="400"
            height="430px"
            style="border:0;"
            allowfullscreen="yes"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>`;

    return info;
}