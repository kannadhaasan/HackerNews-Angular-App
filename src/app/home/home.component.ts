import { Component, OnInit } from '@angular/core';
import { HackerService } from '../hackerService';
import { Story } from '../dtos/story';
import { forEach } from '@angular/router/src/utils/collection';
import { DatePipe } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';
import { async } from '@angular/core/testing';
import { fillProperties } from '@angular/core/src/util/property';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Ids:number[];
  stories:Array<Story>;
  orgStories:Array<Story>;
  query:string="";
  p: any;
  constructor(private hackerService:HackerService) { }

   ngOnInit() {
    
    
    this.stories=new Array<Story>();
    this.orgStories=new Array<Story>();
    this.hackerService.getIds().subscribe(res=>{
      
      if(res!=null){
        this.Ids=res;

        this.getData();
        
      }

    })

  }

  newUpdate(){
    
    this.stories.sort((a1,a2)=> {
      return a2.time -a1.time;
    });
  }

  search(){
    
    if(this.query==""){
      this.stories=this.orgStories;
      return;
    }
    this.stories=this.orgStories.filter(s=>{
      if(s.title!=null){
        if(s.title.includes(this.query)){return true;}          
      }
      if(s.url!=null){
        if(s.url.includes(this.query)){return true;}          
      }
      if(s.by!=null){
        if(s.by.includes(this.query)){return true;}          
      }
      return false;
    });
  }
  async getData(){
      for(var i=0;i<this.Ids.length;i++){
        var res=await this.hackerService.getStoryById(this.Ids[i]).toPromise();
        if(res!=null){
          if(res.url!=null){
            res.site=res.url.split('/')[2];
          }
          if(this.query==""){
            this.stories.push(res); 
          }else{
            if(res.title.includes(this.query)){
              this.stories.push(res);
            }
            else if(res.by.includes(this.query)){
              this.stories.push(res);
            }
            else if(res.url.includes(this.query)){
              this.stories.push(res);
            }
          }
          this.orgStories.push(res);
      }
    }

    
  }
  setAgian(){
    this.stories=this.orgStories;
  }

}
