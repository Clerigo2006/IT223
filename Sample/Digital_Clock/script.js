function updateTime() {
    const now = new Date();
    
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

setInterval(updateTime, 1000);
updateTime(); 


document.getElementById('darkModeBtn').onclick = () => {
    document.body.classList.toggle('dark-mode');
};