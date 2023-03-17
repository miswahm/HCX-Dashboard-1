import { Component, OnInit } from "@angular/core";
import { NbDateService, NbDialogService } from "@nebular/theme";
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
    { view: "Pre Auth Request", value: "preauth_request" },
    { view: "Pre Auth Response", value: "preauth_response" },
    {
      view: "Interim Enhancement Request",
      value: "interim_enhancement_request",
    },
    {
      view: "Interim Enhancement Response",
      value: "interim_enhancement_response",
    },
    { view: "Final Enhancement Request", value: "final_enhancement_request" },
    { view: "Final Enhancement Response", value: "final_enhancement_response" },
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
      custom: [
        {
          name: "yourAction",
          title: '<i class="ion-document" title="YourAction"></i>',
        },
      ],
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
      providerCode: {
        title: "Provider Id",
        type: "string",
      },
      hospitalName: {
        title: "Provider Name",
        type: "string",
      },
      status: {
        title: "Status",
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

  private alive;

  constructor(
    protected dateService: NbDateService<Date>,
    private service: SmartTableData,
    private claimService: ClaimsManagementService,
    private dialogService: NbDialogService
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

  view(e) {
    let key = Object.keys(e.data.errors);

    alert(`${key} = ${e.data.errors[`${key}`]}`);
  }

  fetchTableData(startDate: string, endDate: string, category: string) {
    this.claimService
      .fetchTable(startDate, endDate, category, "all")
      .subscribe((data: any) => {
        //Extract the claimsDetails from each type
        const claimDetailsArray = data
          .map((item) => item.claimDetails)
          .reduce((acc, val) => acc.concat(val), []);

        console.log(claimDetailsArray);
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
      this.selectedStartDate.setValue(this.offsetTimeZone(e));
    } else {
      this.selectedEndDate.setValue(this.offsetTimeZone(e));
    }

    if (this.selectedStartDate.value && this.selectedEndDate.value) {
      this.fetchTableData(
        this.selectedStartDate.value,
        this.selectedEndDate.value,
        this.selectedCategory != undefined ? this.selectedCategory : "all"
      );
    }
  }


  offsetTimeZone(date) {
    let formatedDate = date.toJSON();
    //offset the date value set by ISO format
    let temp = new Date(formatedDate);
    let offset = temp.getTimezoneOffset();
    let newDateObj = new Date(temp.getTime() - offset * 60 * 1000);
    //assigning the new offset value to formateDate
    formatedDate = newDateObj.toJSON().split("T")[0];

    return formatedDate;
  }
}
