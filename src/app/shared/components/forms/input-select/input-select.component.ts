import { Component, ElementRef, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {
  @Input() controlName: string;
  @Input() label: string;
  @Input() form: FormGroup;
  @ViewChild('selected') selected: ElementRef;
  @ViewChild('optionsContainer') optionsContainer: ElementRef;
  @ViewChild('searchBox') searchBox: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log(this.selected);

  }


  toggleSelector(){
    if (this.optionsContainer.nativeElement.classList.contains("active")) {
      this.optionsContainer.nativeElement.classList.remove("active");
    } else {
      let currentActive = document.querySelector(".options-container.active");

      if (currentActive) {
        currentActive.classList.remove("active");
      }

      this.optionsContainer.nativeElement.classList.add("active");
    }

    this.searchBox.nativeElement.value = "";
    // filterList("");

    if (this.optionsContainer.nativeElement.classList.contains("active")) {
      this.searchBox.nativeElement.focus();
    }
  }

}
