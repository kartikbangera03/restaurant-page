import Icon from './RestaurantLogo.png'

export default function restaurantPage(){
    const content = document.querySelector('#content');  
    
    while(content.firstChild) { 
        content.removeChild(content.firstChild); 
    } 
    const  myIcon = new Image();
    myIcon.src = Icon;

    content.appendChild(myIcon);

    const Heading = document.createElement('h1');
    Heading.textContent = 'Indulge in Culinary Bliss: Experience the Unforgettable Delights of Our Restaurant';

    content.appendChild(Heading);

    const para = document.createElement('p');
    const node = document.createTextNode("Step into a world of culinary excellence at Our Restaurant, where every dish tells a story of passion, creativity, and flavor. Nestled in the heart of Mumbai, our restaurant is a haven for food enthusiasts seeking an unforgettable dining experience. From the moment you enter, you'll be greeted by an inviting ambiance that sets the stage for an extraordinary culinary journey. Our talented chefs craft each dish with care, using only the freshest locally-sourced ingredients to create flavors that tantalize the senses. Whether you're craving classic comfort food with a modern twist or yearning to explore bold and innovative flavors, our diverse menu has something for every palate. Indulge in mouthwatering appetizers, savor hearty entrees, and delight in decadent desserts that leave a lasting impression. Complementing our exquisite cuisine is an extensive selection of fine wines, craft cocktails, and artisanal beverages, curated to enhance your dining experience. Our knowledgeable staff is dedicated to providing impeccable service, ensuring that every visit is nothing short of exceptional. Whether you're celebrating a special occasion, enjoying a romantic dinner for two, or simply gathering with friends and family, Our Restaurant promises to exceed your expectations and create memories that linger long after the last bite. Join us and discover why we're the talk of the town!");
    para.appendChild(node);

    content.appendChild(para);
}

