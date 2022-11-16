let nums = document.getElementById('numbers');
for (let i = 1; i <= 30; i++) {
    let span = document.createElement('span');
    span.classList.add("number");
    span.textContent = i;
    nums.append(span);
}

