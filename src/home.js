// home.js
const content = document.querySelector('#content');
export function createHome() {
    const restaurantName = document.createElement('h1');
    const homeContainer = document.createElement('div');
    const homeDescription = document.createElement('p');
    const hoursContainer = document.createElement('div');
    const hoursTitle = document.createElement('h3');
    const hours = document.createElement('ul');
    const locationContainer = document.createElement('div');
    const locationTitle = document.createElement('h3');
    const location = document.createElement('p');

    homeContainer.classList.add('home-container');
    hoursContainer.classList.add('home-container');
    locationContainer.classList.add('home-container');

    content.appendChild(restaurantName);
    content.appendChild(homeContainer);
    homeContainer.appendChild(homeDescription);
    content.appendChild(hoursContainer);
    hoursContainer.appendChild(hoursTitle);
    hoursContainer.appendChild(hours);
    content.appendChild(locationContainer);
    locationContainer.appendChild(locationTitle);
    locationContainer.appendChild(location);

    restaurantName.textContent = 'Baal Steakhouse'
    homeDescription.textContent = `Baal Steakhouse delivers the ultimate experience in prime beef. Our atmosphere and impeccable service are crafted to make you feel like you've stepped into a realm of luxury, where every perfectly charred steak is a decadent reward. This is more than just dinner; it's a bold, classic steakhouse experience where quality and indulgence reign supreme. We invite you to savor the commitment to perfection that defines every cut.`
    hoursTitle.textContent = 'Hours'
    hours.innerHTML = `
        <li>Sunday: 8am - 8pm</li>
        <li>Monday: 6am - 6pm</li>
        <li>Tuesday: 6am - 6pm</li>
        <li>Wednesday: 6am - 6pm</li>
        <li>Thursday: 6am - 10pm</li>
        <li>Friday: 6am - 10pm</li>
        <li>Saturday: 8am - 10pm</li>
    `
    locationTitle.textContent = 'Location'
    location.textContent = 'Qta. El Portal Av. Río de Janeiro, Caracas 1060, Distrito Capital, Venezuela'
}

