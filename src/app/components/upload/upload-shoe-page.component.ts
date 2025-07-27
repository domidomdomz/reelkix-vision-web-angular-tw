import { Component } from '@angular/core';
import { MobileUploaderComponent } from './mobile-uploader.component';
import { DesktopUploaderComponent } from './desktop-uploader.component';

@Component({
  selector: 'app-upload-shoe-page',
  standalone: true,
  imports: [MobileUploaderComponent, DesktopUploaderComponent],
  templateUrl: './upload-shoe-page.component.html',
  styleUrls: ['./upload-shoe-page.component.css']
})
export class UploadShoePageComponent {
    // bring the global URL object into the template’s scope
    public URL = window.URL;
    file?: File;

    onFileSelected(file: File) {
        this.file = file;
    }
}
