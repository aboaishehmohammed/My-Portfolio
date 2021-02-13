import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.type');
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
