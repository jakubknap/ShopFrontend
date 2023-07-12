import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { startWith, switchMap } from 'rxjs';
import { AdminProductService } from './admin-product.service';
import { AdminProduct } from './model/adminProduct';
import { MatTable } from '@angular/material/table';
import { AdminConfirmDialogService } from '../common/service/admin-confirm-dialog.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table !: MatTable<any>;
  displayedColumns: string[] = ["image","id", "name", "price", "actions"];
  totalElements: number = 0;
  data: AdminProduct[] = [];

  constructor(private adminProductService: AdminProductService,
    private dialogService: AdminConfirmDialogService) { }

  ngAfterViewInit(): void {
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        return this.adminProductService.getProducts(this.paginator.pageIndex, this.paginator.pageSize);
      })
    ).subscribe(data => {
      this.totalElements = data.totalElements;
      this.data = data.content;
    });
  }

  confirmDelete(element: AdminProduct) {
    this.dialogService.openConfirmDialog("Czy na pewno chcesz usunąć ten produkt ?")
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.adminProductService.delete(element.id).subscribe(() => {
            this.data.forEach((value, index) => {
              if (element == value) {
                this.data.splice(index, 1);
                this.table.renderRows();
              }
            })
          });
        }
      });
  }
}