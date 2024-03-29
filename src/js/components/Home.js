/*global Flickity*/
import {select, classNames, templates} from '../settings.js';


class Home{
  constructor(element){
    const thisHome = this;
    thisHome.render(element);
    this.initWidgets();
    thisHome.initLink();
  }


  render(element){
    const thisHome = this;
    const generatedHTML = templates.homeWidget();
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    
  }

 

  initWidgets(){
    
    const element = document.querySelector('.main-carousel');

    new Flickity(element,{
      prevNextButtons: false
    });
  }

  initLink() {
    const thisHome = this;
    thisHome.links = document.querySelectorAll('.link');

    for (let link of thisHome.links) {
      link.addEventListener('click', function (event) {
        const clickedLink = this;
        event.preventDefault();
        
        const id = clickedLink.getAttribute('href').replace('#', '');
 
        thisHome.clickedPage(id);

        window.location.hash = '#/' + id;
      });
    }
  }

  clickedPage(pageId) {
    const thisHome = this;
    thisHome.pages = document.querySelector(select.containerOf.pages).children;
    thisHome.navLinks = document.querySelectorAll(select.nav.links);

    for (let page of thisHome.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
      for (let link of thisHome.navLinks) {
        link.classList.toggle(
          classNames.nav.active,
          link.getAttribute('href') == '#' + pageId
        );
      }
    }
  }

}

  



export default Home;