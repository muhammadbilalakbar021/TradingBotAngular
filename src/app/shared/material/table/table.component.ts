import { SelectionModel } from '@angular/cdk/collections';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableConsts } from 'src/app/utils/enums/table';
import { User } from '../../class/user';
import { TableButtonAction } from '../../interfaces/tableButtonAction';
import { TableColumn } from '../../interfaces/tableColumn';

@Component({
  selector: 'app-tree',
  templateUrl: './table.component.html',
  styles: [
    `
      table {
        width: 100%;
      }
      td,
      th {
        width: 20%;
      }
    `,
  ],
})
export class TableComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @Output() action: EventEmitter<TableButtonAction> =
    new EventEmitter<TableButtonAction>();
  @Input() columns!: Array<TableColumn>;
  @Input() dataset!: User[] | null | any;
  @Input() filter!: string;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  dataSource!: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = [];
  value!: string;

  ngOnInit(): void {
    // set table columns
    // this.columns.push({ columnDef: 'action', header: 'Action' });
    this.displayedColumns = this.displayedColumns.concat(
      this.columns.map((x) => x.columnDef)
    );
    // pre-fix static
    this.displayedColumns.push('action');
    this.dataSource = new MatTableDataSource<User[]>(this.dataset);

    // set pagination
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<User[]>(this.dataset);
    this.applyFilter(this.filter);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onTableAction(e: TableButtonAction): void {
    console.log('object', e);
    this.action.emit(e);
  }

  applyFilter(event: string) {
    // const filterValue = (event.target as HTMLInputElement).value;
    if (event) {
      this.dataSource.filter = event?.trim().toLowerCase();
    }
  }
}

@Component({
  selector: '[action-buttons]',
  template: `<button
      mat-icon-button
      [matMenuTriggerFor]="menu"
      aria-label="Example icon-button with a menu"
    >
      <mat-icon>more_vert</mat-icon>
    </button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item (click)="onDeleteClick()">
        <mat-icon>delete</mat-icon>
        <span>Delete</span>
      </button>
      <button mat-menu-item (click)="onEditClick()">
        <mat-icon>edit</mat-icon>
        <span>Edit</span>
      </button>
      <button mat-menu-item (click)="onViewClick()">
        <mat-icon>visibility</mat-icon>
        <span>View Details</span>
      </button>
    </mat-menu>`,
})
export class ActionButtonsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() value!: string | any;
  @Output() buttonAction: EventEmitter<TableButtonAction> =
    new EventEmitter<TableButtonAction>();

  onEditClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.edit,
      value: this.value,
    });
  }
  onDeleteClick() {
    this.buttonAction.emit({
      name: TableConsts.actionButton.delete,
      value: this.value?.company,
    });
  }
  onViewClick() {
    this.buttonAction.emit({ name: TableConsts.actionButton.view });
  }
}
