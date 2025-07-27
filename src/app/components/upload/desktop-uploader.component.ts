import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-desktop-uploader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desktop-uploader.component.html',
  styleUrls: ['./desktop-uploader.component.css']
})
export class DesktopUploaderComponent {
  @Output() fileSelected = new EventEmitter<File>();

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.fileSelected.emit(input.files[0]);
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      this.fileSelected.emit(event.dataTransfer.files[0]);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
}
