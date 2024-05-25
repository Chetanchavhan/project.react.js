const countdownElement = document.getElementById('countdown');
const quoteElement = document.getElementById('quote');

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis"
];

function setCountdown() {
    const targetDate = new Date(document.getElementById('datetime').value);

    if (isNaN(targetDate)) {
        countdownElement.innerHTML = "Invalid date. Please enter a valid date.";
        return;
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownElement.innerHTML = "Countdown finished!";
            clearInterval(countdownInterval);
            clearInterval(quoteInterval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    function updateQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.innerHTML = quotes[randomIndex];
    }

    updateCountdown();
    updateQuote();
    
    const countdownInterval = setInterval(updateCountdown, 1000);
    const quoteInterval = setInterval(updateQuote, 10000);
}
