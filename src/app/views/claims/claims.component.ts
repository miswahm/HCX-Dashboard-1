import { Component, OnInit } from "@angular/core";
import { NbDateService } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../@core/data/smart-table";

@Component({
  selector: "ngx-claims",
  templateUrl: "./claims.component.html",
  styleUrls: ["./claims.component.scss"],
})
export class ClaimsComponent implements OnInit {
  min: Date;
  max: Date;

  categories: String[] = [
    "All",
    "Pre Auth Request",
    "Pre Auth Response",
    "Enhance Request",
    "Enhance Response",
    "Query Request",
    "Query Response",
  ];

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      delete: false,
      add: false,
      edit: false,
      position: "right",
    },
    columns: {
      id: {
        title: "ID",
        type: "number",
      },
      firstName: {
        title: "First Name",
        type: "string",
      },
      lastName: {
        title: "Last Name",
        type: "string",
      },
      username: {
        title: "Username",
        type: "string",
      },
      email: {
        title: "E-mail",
        type: "string",
      },
      age: {
        title: "Age",
        type: "number",
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    protected dateService: NbDateService<Date>,
    private service: SmartTableData
  ) {}

  ngOnInit(): void {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);

    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
