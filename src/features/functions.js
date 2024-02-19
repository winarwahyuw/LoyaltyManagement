export const getGreeting = () => {
    const date = new Date();
    const options = { timeZone: 'Asia/Jakarta' };
    const hour = date.toLocaleString('en-US', { hour: 'numeric', hour12: false, ...options });


    if (hour >= 5 && hour < 12) {
        return 'Good Morning';
    } else if (hour >= 12 && hour < 18) {
        return 'Good Afternoon';
    } else {
        return 'Good Evening';
    }
}