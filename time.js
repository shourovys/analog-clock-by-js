const qt = [
    'The two most powerful warriors are patience and time.',
    'Time is money',
    'Time waits for no one.',
    'Better three hours too soon than a minute too late.',
    'Lost time is never found again.',
    'Time is the most valuable thing a man can spend.',
    'Time is the wisest counselor of all.',
    'The key is in not spending time, but in investing it.',
    'It is the time you have wasted for your rose that makes your rose so important.',
    'Punctuality is the thief of time.',
    'Time is free, but it’s priceless. You can’t own it, but you can use it. You can’t keep it, but you can spend it. Once you’ve lost it you can never get it back.'
]





const qtCon = document.getElementById('show-qt')
const hourCon = document.getElementById('hour-con')
const minCon = document.getElementById('min-con')
const secCon = document.getElementById('sec-con')



setInterval(() => {
    const date = new Date();
    const hour = date.getHours() % 12 || 12;
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const milSec = date.getMilliseconds();

    const hourRotation = 30 * hour + min / 2 + 0.00833333333 * sec;
    const minRotation = 6 * min + 0.1 * sec;
    const secRotation = 6 * sec + 0.006 * milSec;

    hourCon.style.transform = `rotate(${hourRotation}deg)`
    minCon.style.transform = `rotate(${minRotation}deg)`
    secCon.style.transform = `rotate(${secRotation}deg)`

}, 1);


document.getElementById('clock-container').addEventListener('click', () => {
    const random = Math.floor(Math.random() * qt.length);
    qtCon.innerText = `"${qt[random]}"`
})








