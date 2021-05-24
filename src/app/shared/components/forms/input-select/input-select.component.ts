import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
})
export class InputSelectComponent implements OnInit {
  @Input() controlName: string;
  @Input() label: string;
  @Input() form: FormGroup;

  @Input() options: {id:number|string, name:string}[];

  constructor() {}

  ngOnInit(): void {}
}
