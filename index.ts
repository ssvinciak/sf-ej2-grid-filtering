import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import { DataManager, WebApiAdaptor, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

Grid.Inject(Page, Selection);

/**
 * RemoteData sample
 */
let json = "{\r\n \"filterSettings\": {\r\n    \"columns\": [\r\n      { \"field\": \"FirstName\", \"operator\": \"equal\", \"value\": \"Nancy", \"predicate\": \"and\" },\r\n      { \"field\": \"BirthDate\", \"operator\": \"greaterthanorequal\", \"value\": \"1\/1\/2020\", \"predicate\": \"and\" },\r\n      { \"field\": \"BirthDate\", \"operator\": \"lessthanorequal\", \"value\": \"6\/31\/2020\", \"predicate\": \"and\" }\r\n    ]\r\n  }\r\n}";

var obj = JSON.parse(json);
console.log(obj);
    
    let hostUrl: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Employees';
    let data = new DataManager({
        url: hostUrl,
        adaptor: new ODataV4Adaptor() ,
        crossDomain: true
    });

    let grid: Grid = new Grid(
        {
            dataSource: data,
            allowPaging: true, 
            allowFiltering: true,
            filterSettings: {
              type: 'Excel',
              ...obj.filterSettings
            },
            columns: [
                { field: 'BirthDate' },
                { field: 'FirstName' },
            ],
            pageSettings: { pageCount: 3 }
        });
    grid.appendTo('#Grid');


