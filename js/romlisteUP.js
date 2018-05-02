var link = 'https://flydata.avinor.no/XmlFeed.asp?TimeFrom=1&TimeTo=200&airport=BGO&direction=D&A';

var table = document.createElement('table'),
    tr = document.createElement('tr'),
    th = document.createElement('th'),
    td = document.createElement('td');


function makeTable(data) {
    var table = table.cloneNode(false),
        columns = addAllColumnHeaders(data, table);
    for(i = 0, max = arr.length; i < max; i++){
        var tablerow = tr.cloneNode(false);
        for(x = 0, maxy = columns.length; x < maxy; i++){
            var tabledata = td.cloneNode(false);
                cellValue = arr[i][columns[x]]
        }
    }
}