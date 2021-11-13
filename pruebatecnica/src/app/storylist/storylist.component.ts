import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { StoriesService } from '../stories.service';
import { Story } from '../Story/story';
import { StoryitemComponent } from '../storyitem/storyitem.component';

@Component({
  selector: 'app-storylist',
  templateUrl: './storylist.component.html',
  styleUrls: ['./storylist.component.css']
})
export class StorylistComponent implements OnInit {

  storiesObj: Array<Story> = new Array();
  storiesID: number[] = [];

  page_size: number = 50;
  page_number: number = 1;
  page_size_options: number[] = [50];
  pageEvent: PageEvent;

  constructor(
    private storiesService: StoriesService,
  ) {     
  }

  ngOnInit(): void{   
    this.initStories();
  }

  initStories(): any{
    const list: Story[] = [];
    this.storiesService.getTopStories().subscribe((data: number[]) => {
      this.storiesID = data;
      for(var i = 0; i < this.page_size; i++){
        this.storiesService.getStory(this.storiesID[i]).subscribe((data: Story) =>{
          list.push(data)
        })
      }
      this.storiesObj = list;
    })
  }

  onPageChange(event: PageEvent): void{    
    const list: Story[] = [];
    for(var i = event.pageIndex*event.pageSize; i < (event.pageIndex+1)*event.pageSize; i++){
      this.storiesService.getStory(this.storiesID[i]).subscribe((data: Story) =>{
        list.push(data)
      })
    }
    this.storiesObj = list;
  }
}
