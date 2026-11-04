function upDate(previewPic) {
    console.log("Sự kiện upDate đã kích hoạt!");
    let imageDiv = document.getElementById('image');
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Di chuột hoặc dùng phím Tab qua một hình ảnh bên dưới để hiển thị ở đây.";
}

function addTabIndex() {
    console.log("Sự kiện onload đã chạy. Đang tiến hành thêm tabindex...");
    let images = document.querySelectorAll('.preview');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}
