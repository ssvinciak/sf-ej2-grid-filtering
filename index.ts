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

    const date = '01/01/2020';
  
    let grid: Grid = new Grid(
        {
            dataSource: data,
            allowPaging: true, 
            query: new Query().where(
              'BirthDate', 'greaterthanorequal', date,
            ),
            columns: [
                { field: 'BirthDate', headerText: 'Birth',  textAlign: 'Right' },
            ],
            pageSettings: { pageCount: 3 }
        });
    grid.appendTo('#Grid');


