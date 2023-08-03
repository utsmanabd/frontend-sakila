import { Component, ViewChild } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css'],
})
export class ActorComponent {

  tableColumns = ['index', 'first_name', 'last_name', 'edit', 'delete'];
  titlePage = 'Actor List';
  index: number = 0;
  response: any;

  currentPageIndex: number = 0;
  isLoading: boolean = false;
  searchKeyword: string =''

  actorData: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  actorIdData: any;
  firstNameData: string = '';
  lastNameData: string = '';

  constructor(private apiService: ApiService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getActorData();
    // this.paginator.page.subscribe((event) => {
    //   this.currentPageIndex = event.pageIndex;
    // });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  openAddDialog(): void {
    const dialogTitle = 'Add';
    this.setActorDialog(dialogTitle);
  }

  openEditDialog(actorId: any, firstName: string, lastName: string) {
    const dialogTitle = 'Edit';
    console.log(`Edit Actor id: ${actorId}, name: ${firstName} ${lastName}`);
    this.setActorDialog(dialogTitle, actorId, firstName, lastName);
  }

  openDeleteDialog(actorId: any, firstName: string, lastName: string): void {
    const dialogTitle = 'Delete';
    console.log(`Delete Actor id: ${actorId}, name: ${firstName} ${lastName}`);
    this.setActorDialog(dialogTitle, actorId, firstName, lastName);
  }

  setActorDialog(
    dialogTitle: string,
    actorId: number = 0,
    firstName: string = this.firstNameData,
    lastName: string = this.lastNameData
  ) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { title: dialogTitle, first_name: firstName, last_name: lastName },
      width: '600px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        console.log(result.first_name, result.last_name);
        console.log(`Parameter value: ${firstName} & ${lastName}`);

        const resultData = {
          first_name: result.first_name,
          last_name: result.last_name,
        };
      
        if (actorId != 0 && dialogTitle === 'Edit') {
          this.updateActorData(actorId, resultData);
        } else if (actorId != 0 && dialogTitle === 'Delete') {
          this.deleteActorData(actorId);
        } else {
          this.insertActorData(resultData);
        }
      } else {
        console.log('Dialog Closed');
      }
    });
  }

  deleteActorData(id: number) {
    // *Sementara menggunakan safe delete*
    this.isLoading = true;
    const deleteData = {status: 0}
    this.apiService.updateActor(id, deleteData).subscribe(
      (res) => {
        this.isLoading = false;
        this.response = res;
        if (this.response.data != 1) {
          console.error(`Invalid Actor ID`);
        } else {
          console.log(`Success delete actor data`);
          this.getActorData()
        }
      },
      (error) => {
        this.isLoading = false
        console.error('Error delete actor data', error);
      }
    )

    // *Fungsi Delete dinonaktifkan terlebih dahulu untuk menghindari non safe delete*
    
    // this.apiService.deleteActor(id).subscribe(
    //   (res) => {
    //     this.isLoading = false
    //     this.response = res
    //     if (this.response.data != 1) {
    //       console.error(`Invalid Actor ID`);
    //     } else {
    //       console.log(`Success delete actor data`);
    //       this.getActorData()
    //     }
    //   }, 
    //   (error) => {
    //     this.isLoading = false
    //     console.error('Error delete actor data', error);
    //   }
    // )
  }

  updateActorData(id: number, data: any) {
    this.isLoading = true;
    this.apiService.updateActor(id, data).subscribe(
      (res) => {
        this.isLoading = false;
        this.response = res;
        if (this.response.data != 1) {
          console.error(`Invalid Actor ID`);
        } else {
          console.log(`Success updating actor data`);
          this.getActorData()
        }
      },
      (error) => {
        this.isLoading = false;
        console.error('Error updating actor data', error);
      }
    );
  }

  insertActorData(data: any) {
    this.isLoading = true;
    this.apiService.insertActor(data).subscribe(
      (res) => {
        this.isLoading = false;
        this.response = res;
        this.actorIdData = this.response.data[0];
        console.log(
          `Success insert actor data with actor_id: ${this.actorIdData}`
        );
        // this.getActorData()
        const newData = {
          index: (this.currentPageIndex * this.paginator.pageSize) + (this.actorData.data.length + 1),
          actor_id: this.actorIdData,
          first_name: data.first_name,
          last_name: data.last_name,
        };
        this.actorData.data.push(newData);
        this.actorData._updateChangeSubscription();
      },
      (error) => {
        this.isLoading = false;
        console.error('Error insert actor data:', error);
      }
    );
  }

  getActorData() {
    this.isLoading = true;
    this.apiService.getAllActor().subscribe(
      (res) => {
        this.isLoading = false;
        this.response = res;
        this.actorData = new MatTableDataSource(this.response.data);

        this.setPaginator(this.actorData);
        this.applyFilter
        console.log(res);
      },
      (error) => {
        this.isLoading = false;
        console.error('Error fetching actor data:', error);
      }
    );
  }

  setPaginator(dataSource: any) {
    this.paginator.pageSize = 8;
    dataSource.paginator = this.paginator;
    this.paginator.page.subscribe((event) => {
      this.currentPageIndex = event.pageIndex;
    });
  }

  applyFilter() {
    this.actorData.filter = this.searchKeyword.trim().toLowerCase();
  }
}
