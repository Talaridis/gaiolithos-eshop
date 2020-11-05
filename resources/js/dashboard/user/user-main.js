console.log("work")


$("#user-main-datatable").DataTable({
    processing: true,
    serverSide: true,
    ajax: "/test" ,
    columns: [
        {data: 'id', name: 'id'},
        {data: 'name', name: 'name'},
        {data: 'email', name: 'email'},
        {data: 'created_at', name: 'created_at'},
        {data: 'updated_at', name: 'updated_at'}
    ]


})
