import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { Grid, Page, Selection } from '@syncfusion/ej2-grids';
import { DataManager, WebApiAdaptor, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

Grid.Inject(Page, Selection);

/**
 * RemoteData sample
 */

    
    let hostUrl: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Employees';
    let data: Object = new DataManager({
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
              columns: [
                {field: 'BirthDate', operator:'greaterthanorequal', value: '1/1/2020', matchCase: true },
                {field: 'FirstName', operator:'equal', value: 'Nancy', matchCase: true },
              ]
            },
            columns: [
                { field: 'BirthDate' },
                { field: 'FirstName' },
            ],
            pageSettings: { pageCount: 3 }
        });
    grid.appendTo('#Grid');


