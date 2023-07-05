import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
   
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    $("#right").click(function() {
      var currentLeft = parseInt($('.items').css('left'));
      $('.items').css('left', (currentLeft - 800) + 'px');
    })
    
    $('#left').click(function() {
      var currentLeft = parseInt($('.items').css('left'));
      $('.items').css('left', (currentLeft + 800) + 'px');
    })

    }
    
    
    
  }



