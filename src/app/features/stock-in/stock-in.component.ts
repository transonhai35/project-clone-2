import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ManageService } from 'src/app/core/manage.service';

@Component({
  selector: 'app-stock-in',
  templateUrl: './stock-in.component.html',
  styleUrls: ['./stock-in.component.scss']
})
export class StockInComponent {
  hamburgerLink = 'LeftSideBar';
  stockIn:Array<any> = this.manageService.stockIn;

  constructor(private manageService: ManageService){}

  displayedColumns: string[] = ['producer', 'price','tax','total','date','person','action'];
  dataSource = new MatTableDataSource<Array<any>>(this.stockIn);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



}
