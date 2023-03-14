import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GraphHelperService {
  constructor() {}

  remodelArray(claimCount: any): String[] {
    console.log(claimCount);

    const sortedValues = claimCount
      .sort((a, b) => {
        // sort in ascending date order
        const dateA: any = new Date(Object.keys(a)[0]);
        const dateB: any = new Date(Object.keys(b)[0]);
        return dateA - dateB;
      })
      .map((obj) => Object.values(obj)[0]);

    return sortedValues;
  }
}
