export default function AboutPage(){
    const content = document.querySelector('#content');    
    while(content.firstChild) { 
        content.removeChild(content.firstChild); 
    } 

    const Heading = document.createElement('h1');
    Heading.textContent = 'About Us';

    content.appendChild(Heading);

    const spanPara = document.createElement('span');
    const node = document.createTextNode(`
    Welcome to "Our Restaurant," where culinary passion meets unparalleled hospitality in the vibrant heart of Mumbai.

    Nestled amidst the bustling streets of Mumbai, "Our Restaurant" boasts a rich history steeped in tradition and a commitment to bringing the authentic flavors of Italy to our bustling metropolis. With roots tracing back to our founders' journey to Italy, where they immersed themselves in the art of pizza-making, we've since become pioneers in introducing the original recipes of pizza to the heart of Mumbai.
    
    At "Our Restaurant," we believe in preserving the authenticity of Italian cuisine while infusing it with our own unique Mumbai flair. Our menu showcases a tantalizing array of dishes inspired by the rich tapestry of Italian gastronomy, each crafted with care using the finest imported ingredients and traditional cooking techniques.
    
    From our signature wood-fired pizzas, featuring thin crusts and mouthwatering toppings, to our hearty pasta dishes and flavorful antipasti, every bite at "Our Restaurant" is a celebration of culinary excellence and cultural fusion. We take pride in staying true to our Italian heritage while embracing the vibrant spirit of Mumbai.
    
    Complementing our delectable cuisine is a carefully curated selection of wines, cocktails, and beverages, designed to enhance your dining experience and elevate your senses. Whether you're celebrating a special occasion, enjoying a romantic dinner for two, or simply gathering with friends and family, our attentive staff is dedicated to ensuring that every moment spent with us is unforgettable.
    
    From intimate dinners to lavish celebrations, "Our Restaurant" is the perfect destination for all your culinary adventures. Join us and discover why we're not just another restaurant—we're a destination for food lovers, a gathering place for friends, and a home away from home in the heart of Mumbai.
    
    Experience the magic of "Our Restaurant" today. We can't wait to welcome you!
    `);
    spanPara.appendChild(node);



    
    content.appendChild(spanPara);
}