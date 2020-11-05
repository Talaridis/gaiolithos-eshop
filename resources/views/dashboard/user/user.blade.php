@extends("layouts.dashboard")

@section("content")
    <div class="container-fluid mt-4">
        <div class="row">
            <div class="col-md-6 col-lg-4">

                <!-- Simple card -->
                <div class="card d-block">
                    <div class="card-body">

                        <div class="form-group">
                            <label for="simpleinput">Ονομα </label>
                            <input type="text" id="simpleinput" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="simpleinput">Επίθετο </label>
                            <input type="text" id="simpleinput" class="form-control">
                        </div>

                        <div class="form-group">
                            <label>Email</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                </div>
                                <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                                       aria-describedby="basic-addon1">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="simpleinput">Τηλεφωνώ </label>
                            <input type="text" id="simpleinput" class="form-control">
                        </div>

                        <div class="form-group">
                            <label for="example-textarea">Προφιλ</label>
                            <textarea class="form-control" id="example-textarea" rows="5"></textarea>
                        </div>

                    </div> <!-- end card-body-->
                </div> <!-- end card-->
            </div>
            <div class="col-md-6 col-lg-4">

                <!-- Simple card -->
                <div class="card d-block">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="">Role</label>
                            <select class="form-control select2" data-toggle="select2">
                                <option>Select</option>
                                <option value="CA">California</option>
                                <option value="NV">Nevada</option>
                                <option value="OR">Oregon</option>
                                <option value="WA">Washington</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="password">Κωδικός </label>
                            <div class="input-group input-group-merge">
                                <input type="password" id="password" class="form-control"
                                       placeholder="Enter your password">
                                <div class="input-group-append" data-password="false">
                                    <div class="input-group-text">
                                        <span class="password-eye"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="password">Επανάληψη κωδικού</label>
                            <div class="input-group input-group-merge">
                                <input type="password" id="password" class="form-control"
                                       placeholder="Enter your password">
                                <div class="input-group-append" data-password="false">
                                    <div class="input-group-text">
                                        <span class="password-eye"></span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div> <!-- end card-body-->
                </div> <!-- end card-->
            </div>
            <div class="col-md-6 col-lg-4">

                <!-- Simple card -->
                <div class="card d-block">
                    <div class="card-body">

                        <button type="button" class="w-100 btn btn-primary">Save</button>

                        <hr>

                        <div class="form-row justify-content-center align-items-center ">
                                <label class="font-16 mr-3">Status</label>
                                <input type="checkbox" id="switch2"  data-switch="primary"/>
                                <label for="switch2" data-on-label="On" data-off-label="Off"></label>
                        </div>

                        <hr>
                        <div class="form-group text-center">
                            <div class="d-inline-block position-relative">
                                <img  height="150" src="https://via.placeholder.com/200" alt="image" class="img-fluid rounded">
                                <i class="dripicons-pencil position-absolute edit-avatar"></i>
                            </div>


                        </div>


                    </div> <!-- end card-body-->
                </div> <!-- end card-->
            </div>
        </div>
    </div>

@endsection
