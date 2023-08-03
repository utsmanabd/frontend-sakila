import { Component, ViewChild } from '@angular/core';
import { DialogFilmComponent } from './dialog-film/dialog-film.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {
  film: any
  tableColumns = ['film_id', 'title', 'description', 'release_year', 'edit', 'delete']
  titlePage = "Film List"
  filmData: any
  
  first_name: string = ''
  last_name: string = ''

  constructor(private apiService: ApiService, public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogFilmComponent, {
      data: {first_name: this.first_name, last_name: this.last_name}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log(result.first_name, result.last_name);
        this.first_name = result.first_name
        this.last_name = result.last_name
      } else {
        console.log("Dialog Closed")
      }
      
    });
  }

  ngOnInit(): void {
    this.getFilmData();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  getFilmData() {
    this.apiService.getAllFilm().subscribe(
      res => {
        this.film = res;
        this.filmData = new MatTableDataSource(this.film.data);
        this.setPaginator(this.filmData);
        console.log(res);
      },
      error => {
        console.error('Error fetching actor data:', error);
      }
    )
  }

  setPaginator(dataSource: any) {
    this.paginator.pageSize = 8;
    dataSource.paginator = this.paginator
  }
}
