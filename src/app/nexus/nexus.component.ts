import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nexus',
  templateUrl: './nexus.component.html',
  styleUrls: ['./nexus.component.css']
})
export class NexusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelector('body').style.backgroundImage = "";
      document.querySelector('body').classList.add('nexus');
  }

}
