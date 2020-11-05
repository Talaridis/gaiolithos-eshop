@extends("layouts.dashboard")

@section("content")
    <div class="container-fluid my-4 table-responsive">
        <table id="user-main-datatable" class="table dt-responsive nowrap w-100">
            <thead>
            <tr>
                <th>Όνομα</th>
                <th>Επώνυμο</th>
                <th>E-mail</th>
                <th>Τηλέφωνο</th>
                <th>Κατάσταση</th>
                <th>Ενημερώθηκε</th>
                <th>Δημιουργήθηκε</th>
            </tr>
            </thead>
        </table>
    </div>


@endsection


@section("script")
    <script src="/assets/js/vendor/jquery.dataTables.min.js"></script>
    <script src="/assets/js/vendor/dataTables.bootstrap4.js"></script>
    <script src="{{mix("js/dashboard/user/user-main.js")}}"></script>
@endsection


