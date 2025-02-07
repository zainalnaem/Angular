import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
 @Output() close = new EventEmitter<void>();
 
  enteredTitel = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService)
  onCancel(){
    this.close.emit();
 }

 onSubmit(){
  this.tasksService.addTask({
    titel: this.enteredTitel,
    summary: this.enteredSummary,
    date: this.enteredDate
  }, this.userId 
  );
  this.close.emit();
 }
}
