$(function(){

    // Initializing the swiper plugin for the slider.
    // Read more here: http://idangero.us/swiper/api/
    
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
    
});

import * as React from 'react'
import WidgetBot from '@widgetbot/react-embed'

const App = () => (
  <WidgetBot
    server="299881420891881473"
    channel="355719584830980096"
    shard="https://e.widgetbot.io"
  />
)

export default App