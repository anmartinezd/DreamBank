import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
  @Input() controlName: string;
  @Input() label: string;
  @Input() form: FormGroup;
  @Input() type: string = 'text';
  @Input() controlStyle: string = "primary";
  @ViewChild('input') inputRef: HTMLElement; 
  inputClases: string[] = ['mb-3', 'form-control'];
  labelClases: string[] = ['col-sm-3' ,'col-form-label'];

  constructor() { }

  ngOnInit(): void {
    this.setStyle();
  }


  setStyle() {
    switch (this.controlStyle) {
      case "primary":
        this.inputClases = [...this.inputClases];
        this.labelClases = [...this.labelClases];
        break;
      case "secondary":
          this.inputClases = [...this.inputClases,'secondary-input','text-white'];
          this.labelClases = [...this.labelClases, 'text-white'];
        break
      default:
        break;
    }
  }

}
