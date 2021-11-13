import { Component, OnInit, Input} from '@angular/core';
import { Story } from '../Story/story';

@Component({
  selector: 'app-storyitem',
  templateUrl: './storyitem.component.html',
  styleUrls: ['./storyitem.component.css']
})
export class StoryitemComponent implements OnInit {

  @Input() story: Story;
  constructor() { }

  ngOnInit(): void {
  }

}
