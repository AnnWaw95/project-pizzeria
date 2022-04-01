/*global Flickity*/

import {templates} from '../settings.js';

class Home{
  constructor(element){
    const thisHome = this;
    thisHome.render(element);
    this.initWidgets();
  }


  render(element){
    const thisHome = this;
    const generatedHTML = templates.home;
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }

  initWidgets(){
    
    const element = document.querySelector('.main-carousel');

    new Flickity(element,{
      wrapAround: true,
      prevNextButtons: false
    });
  }
}

export default Home;