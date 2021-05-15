import { ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  private rowClicked: HTMLElement;
  @Input() hasIcons: boolean = false;
  @Input() headers: {label: string, key:string}[];
  @Input() dataSource: {[key:string]: string}[];
  @Output() onRowClicked: EventEmitter<{[key:string]:string}> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public handleRowClick($event: MouseEvent, item:{[key:string]: any}) {
    if (this.rowClicked) {
      this.rowClicked.classList.remove("table-active", "border-4", "border-top-0", "border-end-0", "border-bottom-0", "border-info");
      this.rowClicked = null;
    }
    if($event.currentTarget instanceof HTMLElement && $event.currentTarget !== this.rowClicked){
      this.rowClicked = $event.currentTarget as HTMLElement;
      this.rowClicked.classList.add("table-active", "border-4", "border-top-0", "border-end-0", "border-bottom-0", "border-info");
    }
    this.onRowClicked.emit(item);
  }

}
