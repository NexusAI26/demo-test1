let headerTitle = [
    { title: "WORKING TIME: ", content: "Monday - Friday: 08 AM - 06 PM" },
    { title: "FIND US:  ", content: "40 Baria Street 133/2, New York City, US" },
];


let data = '';

headerTitle.map((value, index) => {
    data += `
    <div class="work">
        <div class="icon"></div>
        <div>
            <p class="info_title">${value.title}</p>
            <div class = "info_content">${value.content}</div>
        </div>
    </div>`;
});

let info_data = document.getElementById("info");
info_data.innerHTML = data;
