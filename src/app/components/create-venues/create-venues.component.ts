import { Component } from '@angular/core';
import { FileUploadserviceService } from 'src/app/services/file-uploadservice.service';

@Component({
  selector: 'app-create-venues',
  templateUrl: './create-venues.component.html',
  styleUrls: ['./create-venues.component.css']
})
export class CreateVenuesComponent {

  onSubmit(){
    
  }

  shortLink: string = "";
    loading: boolean = false; // Flag variable
    file: File = null; // Variable to store file
  
    // Inject service 
    constructor(private fileUploadService: FileUploadserviceService) { }
   
    
    // On file Select
    onChange(event) {
        this.file = event.target.files[0];
    }
  
    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        console.log(this.file);
        this.fileUploadService.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {
  
                    // Short link via api response
                    this.shortLink = event.link;
  
                    this.loading = false; // Flag variable 
                }
            }
        );
    }


    ngOnInit() { }
    uploadfun(event) {
        console.log(event);
    }
}
