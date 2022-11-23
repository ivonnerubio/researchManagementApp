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

  public onOpenModal(paper: Paper, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      button.setAttribute('data-target', '#addPaperModal');
    }
    if(mode === 'edit'){
      // this.editEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if(mode === 'delete'){
      // this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container?.appendChild(button);
    button.click();

  }
  
  
}


