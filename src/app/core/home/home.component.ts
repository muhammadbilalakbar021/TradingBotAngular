import { UserService } from './../../shared/services/user.service';
import { UserState } from './../../shared/store/reducer/user.reducer';
import { Observable } from 'rxjs';
import { User } from './../../shared/class/user';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { select, Store } from '@ngrx/store';
import { selectUsers } from 'src/app/shared/store/selector/user.selectors';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/material/dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  customers$!: Observable<User[]>;
  valueTobeFiltered!: string | Event | any;
  columns = [
    { columnDef: 'name', header: 'Name' },
    { columnDef: 'date', header: 'Date' },
    { columnDef: 'company', header: 'Company' },
    { columnDef: 'country', header: 'Country' },
    { columnDef: 'city', header: 'City' },
  ];
  data!: any;
  showSpinner: boolean = true;
  opacity: Object = { opacity: '0.2' };

  constructor(
    private store: Store<UserState>,
    public userService: UserService,
    public dialog: MatDialog
  ) {
    this.customers$ = this.store.pipe(select(selectUsers));
    this.store.pipe(select(selectUsers)).subscribe((data: any) => {
      this.data = data;
    });
    // this.userService.addUser({});
    console.log('this.customers$', this.customers$);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showSpinner = !this.showSpinner;
      this.opacity = { opacity: '1' };
    }, 5000);
  }

  onTableAction(event: any) {
    console.log('event', event);
  }

  applyFilter(event: Event) {
    this.valueTobeFiltered = (event.target as HTMLInputElement).value;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: new User({}),
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      this.userService.addUser(result);
    });
  }
}
