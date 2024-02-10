import MenuIcon from './MenuSnapshot.png';


export default function MenuPage(){
    const content = document.querySelector('#content');    
    while(content.firstChild) { 
        content.removeChild(content.firstChild); 
    } 
    
    const  myIcon = new Image();
    
    myIcon.src = MenuIcon;
    content.appendChild(myIcon);

}