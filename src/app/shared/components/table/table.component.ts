import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  private rowClicked: HTMLElement;
  @Input() headers: {label: string, key:string}[];
  @Input() dataSource: {[key:string]: string}[];
  @Input() handlerHeaderLink: {linkText: string, handleClick: () => {}};
  constructor() { }

  ngOnInit(): void {
  }

  handleRowClick($event: MouseEvent) {
    if (this.rowClicked) {
      this.rowClicked.classList.remove("table-active", "border-4", "border-top-0", "border-end-0", "border-bottom-0", "border-info");
      this.rowClicked = null;
    }
    console.log($event.currentTarget != this.rowClicked);
    if($event.currentTarget instanceof HTMLElement && $event.currentTarget !== this.rowClicked){
      this.rowClicked = $event.currentTarget as HTMLElement;
      this.rowClicked.classList.add("table-active", "border-4", "border-top-0", "border-end-0", "border-bottom-0", "border-info");
    }
  }

}
