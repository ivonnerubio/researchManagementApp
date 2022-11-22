import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Paper } from './paper';
import { PaperService } from './paper.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public papers: Paper[] = [];

  constructor(private paperService :PaperService){

  }


  ngOnInit(): void {
    this.getPapers();
      
  }

  public getPapers(): void{
      this.paperService.getPapers().subscribe(
        (response: Paper[]) =>{
          this.papers = response;
        },
        (error: HttpErrorResponse) =>{
          alert(error.message);
        }
        )
  }
  title = 'researchManagementApp';

  public paper: Paper[] = [];
  
}
