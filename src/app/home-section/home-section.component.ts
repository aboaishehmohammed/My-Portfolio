import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css']
})
export class HomeSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.typing');
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'crimson'
    })

    writer
      .strings(
        400,
        "Software Developer",
        "Web Developer",
        "App Developer"
      )
      .start()

  }

}
