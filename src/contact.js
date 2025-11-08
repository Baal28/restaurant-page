//contact.js
function createContactSection(titleText, detailsHTML) {
    //1 create all necessary elements
    const contactContainer = document.createElement('div');
    const contactTitle = document.createElement('h3');
    const contactPara = document.createElement('p');

    //2 set content and classes
    contactContainer.classList.add('home-container');
    contactTitle.textContent = titleText;
    contactPara.innerHTML = detailsHTML;

    //3 assemble the elements
    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(contactPara);

    //4 return the assembled container
    return contactContainer;
}

const content = document.querySelector('#content');
export function createContact() {
    const restaurantContact = document.createElement('h1');
    restaurantContact.textContent = 'Contact Us';
    content.appendChild(restaurantContact);
    //content.appendChild(contactContainer);

    const mamaDetails = `Manager<br>555-555-5554<br>totallyRealEmail@notFake.com`;
    const mamaSection = createContactSection('Mama Steak', mamaDetails);
    content.appendChild(mamaSection);
    
    const papaDetails = `Head Chef<br>555-555-5555<br>perfectlyRealEmail@notFake.com`;
    const papaSection = createContactSection('Papa Steak', papaDetails);
    content.appendChild(papaSection);

    const sonDetails = `Waiter<br>555-555-5556<br>totallyRealEmail@notFake.com`;
    const sonSection = createContactSection('Son Steak', sonDetails);
    content.appendChild(sonSection);
}