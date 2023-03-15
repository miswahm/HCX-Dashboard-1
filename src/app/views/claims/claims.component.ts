import { Component, OnInit } from "@angular/core";
import { NbDateService } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../@core/data/smart-table";
import { ClaimsManagementService } from "./claims-management.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "ngx-claims",
  templateUrl: "./claims.component.html",
  styleUrls: ["./claims.component.scss"],
})
export class ClaimsComponent implements OnInit {
  min: Date;
  max: Date;

  categories: any[] = [
    { view: "All", value: "all" },
    { view: "Pre Auth Request", value: "pre_auth_request" },
    { view: "Pre Auth Response", value: "pre_auth_response" },
    { view: "Interim Enhancement Request", value: "interim_enhance_request" },
    { view: "Interim Enhancement Response", value: "interim_enhance_response" },
    { view: "Final Enhancement Request", value: "final_enhance_request" },
    { view: "Final Enhancement Response", value: "final_enhance_response" },
    { view: "Query Request", value: "query_request" },
    { view: "Query Response", value: "query_response" },
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
      claimId: {
        title: "ID",
        type: "number",
      },
      requestType: {
        title: "Type",
        type: "string",
      },
      errors: {
        title: "Errors",
        type: "string",
      },
      providerCode: {
        title: "Provider Id",
        type: "string",
      },
      createdDate: {
        title: "Created Date",
        type: "string",
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  selectedItemFormControl = new FormControl("all");

  selectedStartDate = new FormControl();
  selectedEndDate = new FormControl();

  private startDate;
  private endDate;
  private selectedCategory;

  constructor(
    protected dateService: NbDateService<Date>,
    private service: SmartTableData,
    private claimService: ClaimsManagementService
  ) {}

  ngOnInit(): void {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);

    let currentDate = new Date();

    this.endDate = currentDate.toJSON().split("T")[0];

    const sevenDaysAgo = new Date(currentDate); // create a new date object with the current date
    sevenDaysAgo.setDate(currentDate.getDate() - 7);

    this.startDate = sevenDaysAgo.toJSON().split("T")[0];

    this.fetchTableData(this.startDate, this.endDate, "all");

    this.filterCategory();
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  fetchTableData(startDate: string, endDate: string, category: string) {
    this.claimService
      .fetchTable(startDate, endDate, category, "all")
      .subscribe((data: any) => {
        //Extract the claimsDetails from each type
        const claimDetailsArray = data.reduce((acc, item) => {
          return acc.concat(item.claimDetails);
        }, []);

        this.source.load(claimDetailsArray);
      });
  }

  filterCategory() {
    this.selectedItemFormControl.valueChanges.subscribe((data) => {
      this.selectedCategory = data;
      this.fetchTableData(this.startDate, this.endDate, data);
    });
  }

  filterDate(e, type) {
    console.log(e);

    if (type == "start") {
      this.selectedStartDate.setValue(e.toJSON().split("T")[0]);
    } else {
      this.selectedEndDate.setValue(e.toJSON().split("T")[0]);
    }

    if (this.selectedStartDate.value && this.selectedEndDate.value) {
      this.fetchTableData(
        this.selectedStartDate.value,
        this.selectedEndDate.value,
        this.selectedCategory != undefined ? this.selectedCategory : "all"
      );
    }
  }
}
