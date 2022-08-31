import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { ImagesService } from '../images.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})


export class ImagesComponent implements OnInit{
 
  files:any=[];
  filesToUpload:any=[];
  urls:any=[];
  imagepath:any;
  images = new Array ();
  myForm!:FormGroup;

  constructor(private formbuilder:FormBuilder,private imageService :ImagesService ,private http :HttpClient){
    this.myForm = this.formbuilder.group({
      name : ['',Validators.required , Validators.minLength(3)],
      file:['',Validators.required],

    })
  }
  

  ngOnInit(): void {
    
  }
 
  onFileChange(event:any){

            // to get the file
            const files = event.target.files;
            console.log(files);
            // to show the file in frontend 
            var filestoShow = event.target.files.length;
            for (let i=0; i< filestoShow ; i++){
              var reader = new FileReader();
              reader.onload = (event:any) => {
                this.images.push(event.target.result);
                this.myForm.patchValue({
                  fileSource: this.images
                })
              }
              reader.readAsDataURL(event.target.files[i]);
            }
            // create an instance file
            // main work
             const formdata = new FormData();
            
             for (let index = 0; index < files.length; index++) {
              const element = files[index];
                formdata.append('multiplefiles', element);
                
             }
            
             this.http.post('http://localhost:4300/multiplefiles', formdata)
             .subscribe((d) => {
               console.log(d);
         },(error) => {console.error(error)});
             
                 
           
             
            // used for single image
            // const formdata = new FormData();
            // formdata.append('file', file);

            // var filestoShow = event.target.files.length;
            // for (let i=0; i< filestoShow ; i++){
            //   var reader = new FileReader();
            //   reader.onload = (event:any) => {
            //     this.images.push(event.target.result);
            //     this.myForm.patchValue({
            //       fileSource: this.images
            //     })
            //   }
            //   reader.readAsDataURL(event.target.files[i]);
            // }
        // this.http.post('http://localhost:4300/file', formdata)
        //     .subscribe((d) => {
        //       console.log(d);
        // },(error) => {console.error(error)});
            
                
           }
            
    onSubmit(value:any){
      
      console.log(value);
        alert('success')

      
      
      
    }
}
  

  


 

  

  
  