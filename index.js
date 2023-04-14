let value = parseInt(prompt("nhap vao mot so"));
let numbers = [-3, 5, 1, 3, 2, 10];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] != value) {
        alert("khong tim thay phan tu");
        break;
    } else {
        document.write("vi tri phan tu: " + i);
        break;
    }
}