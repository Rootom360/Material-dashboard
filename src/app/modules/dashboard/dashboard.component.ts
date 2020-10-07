import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../dashboard.service';

export interface PeriodicElement {
  checked: boolean;
  name: string;
  position: number;
  weight: number;
  symbol: string;
  surname: string;
} //Here i have declared my every model data's type like string, number or boolean..

const ELEMENT_DATA: PeriodicElement[] = [
  { checked: false, position: 1, name: 'Hydrogen', surname: 'mishra', weight: 1.0079, symbol: 'H' },
  { checked: false, position: 2, name: 'Helium', surname: 'mishra', weight: 4.0026, symbol: 'He' },
  { checked: false, position: 3, name: 'Lithium', surname: 'mishra', weight: 6.941, symbol: 'Li' },
  { checked: false, position: 4, name: 'Beryllium', surname: 'mishra', weight: 9.0122, symbol: 'Be' },
  { checked: false, position: 5, name: 'Boron', surname: 'mishra', weight: 10.811, symbol: 'B' },
  { checked: false, position: 6, name: 'Carbon', surname: 'mishra', weight: 12.0107, symbol: 'C' },
  { checked: false, position: 7, name: 'Nitrogen', surname: 'mishra', weight: 14.0067, symbol: 'N' },
  { checked: false, position: 8, name: 'Oxygen', surname: 'mishra', weight: 15.9994, symbol: 'O' },
  { checked: false, position: 9, name: 'Fluorine', surname: 'mishra', weight: 18.9984, symbol: 'F' },
  { checked: false, position: 10, name: 'Neon', surname: 'mishra', weight: 20.1797, symbol: 'Ne' },
  { checked: false, position: 11, name: 'Sodium', surname: 'mishra', weight: 22.9897, symbol: 'Na' },
  { checked: false, position: 12, name: 'Magnesium', surname: 'mishra', weight: 24.305, symbol: 'Mg' },
  { checked: false, position: 13, name: 'Aluminum', surname: 'mishra', weight: 26.9815, symbol: 'Al' },
  { checked: false, position: 14, name: 'Silicon', surname: 'mishra', weight: 28.0855, symbol: 'Si' },
  { checked: false, position: 15, name: 'Phosphorus', surname: 'mishra', weight: 30.9738, symbol: 'P' },
  { checked: false, position: 16, name: 'Sulfur', surname: 'mishra', weight: 32.065, symbol: 'S' },
  { checked: false, position: 17, name: 'Chlorine', surname: 'mishra', weight: 35.453, symbol: 'Cl' },
  { checked: false, position: 18, name: 'Argon', surname: 'mishra', weight: 39.948, symbol: 'Ar' },
  { checked: false, position: 19, name: 'Potassium', surname: 'mishra', weight: 39.0983, symbol: 'K' },
  { checked: false, position: 20, name: 'Calcium', surname: 'mishra', weight: 40.078, symbol: 'Ca' },
]; //This is the model data for making data table

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
  bigChart = []; //This this is the big chart which is showing in dashboard screen
  cards = []; //This cards after big chart
  pieChart = []; //This piechart showing after card on right down side

  displayedColumns: string[] = [
    'checked',
    'position',
    'name',
    'weight',
    'symbol',
    'surname', // this is storing model data , which is use in HTML 
  ];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA); // this variable converting mat-table data source in type of perioid elementand it is also use in HTML.

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;   //this table use in pagination
    this.dataSource.sort = this.sort;        //this data is  use for sorting
  }

  public doFilter = (value: string) => {                         //this funtion does filter in data table   
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
