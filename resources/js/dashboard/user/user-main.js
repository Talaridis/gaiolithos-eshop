
$("#user-main-datatable").DataTable({
    processing: true,
    serverSide: true,
    ajax: "/user-main/datatable" ,
    columns: [
        {data: 'first_name', name: 'first_name'},
        {data: 'last_name', name: 'last_name'},
        {data: 'email', name: 'email'},
        {data: 'phone', name: 'phone'},
        {data: 'status', name: 'email'},
        {data: 'created_at', name: 'created_at'},
        {data: 'updated_at', name: 'updated_at'}
    ]


})
