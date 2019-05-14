$(document).ready(function() {
    var table = $('#example').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            {
                text: 'Button 1',
                action: function ( e, dt, node, config ) {
                    alert( 'Button 1 clicked on' );
                }
            }
        ]
    } );
 
    new $.fn.dataTable.Buttons( table, {
        buttons: [
            {
                text: 'Button 2',
                action: function ( e, dt, node, conf ) {
                    alert( 'Button 2 clicked on' );
                }
            },
            {
                text: 'Button 3',
                action: function ( e, dt, node, conf ) {
                    alert( 'Button 3 clicked on' );
                }
            }
        ]
    } );
 
    table.buttons( 1, null ).container().appendTo(
        table.table().container()
    );
} );