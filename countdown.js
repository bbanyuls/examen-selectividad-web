document.addEventListener('DOMContentLoaded', function() {
    // Set the countdown to end on May 26, 2025
    const countDownDate = new Date("May 26, 2025 00:00:00").getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        
        if (distance < 0) {
            // Countdown is over
            clearInterval(x);
            document.querySelector('.countdown-timer').innerHTML = "¡YA DISPONIBLE!";
            
            // Enable access button and change notice text
            const accessButton = document.getElementById('access-btn');
            const noticeText = document.querySelector('.notice-text');
            
            // Enable the button and add click handler
            if (accessButton) {
                accessButton.disabled = false;
                accessButton.addEventListener('click', function() {
                    window.location.href = "https://wuolah.com";
                });
            }
            
            // Change the notice text
            if (noticeText) {
                noticeText.innerHTML = "¡EL EXAMEN FILTRADO YA ESTÁ AQUÍ!";
            }
        } else {
            // Still counting down
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            
            // Display the countdown
            document.querySelector('.countdown-timer').innerHTML = 
                days + " DÍAS : " + hours + " H : " + minutes + " MIN";
        }
    }
    
    // Initial update
    updateCountdown();
    
    // Update every minute
    const x = setInterval(updateCountdown, 60000);
});
