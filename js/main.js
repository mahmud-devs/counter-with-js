/*
=================================
*/
const item = document.querySelectorAll(".item");
const allItem = Array.from(item);

allItem.map((item) => {
    let count = 0;

    const counterUp = () => {
        count += 3;
        item.innerHTML = count;
        if (item.dataset.item1 == 5) {
            count += 5;
        } else if (item.dataset.item4 == 8) {
            count += 8;
        } else if (item.dataset.item5 == 33) {
            count += 13;
        }
        if (count > 1000) {
            clearInterval(stop);
        }
    };

    const stop = setInterval(() => {
        counterUp();
    }, 10);
});
