import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-uploader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-uploader.component.html',
  styleUrls: ['./mobile-uploader.component.css']
})
export class MobileUploaderComponent {
  @Output() fileSelected = new EventEmitter<File>();

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.fileSelected.emit(input.files[0]);
    }
  }
}
