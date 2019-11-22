<?php 
    if(isset($_GET["page"])){
        $page = $_GET["page"];
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Transportation Engineering Laboratory</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Abel">
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Adamina">
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Rokkitt">
    <link rel="stylesheet" href="transEL.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="main.js"></script>
    <style>
        .header{
            padding: 0;
            margin-bottom: 15px;
            background: none;
        }
        .panel-heading{
            background-color: #646!important;
            color: white!important;
            border: none;
        }
    </style>
</head>
<body>
    <div class="container-fluid header">
        <div class="container">
            <div class="panel panel-default">
                <div class="panel-body">
                <div class="col-sm-3 col-md-2 text-right">
                    <img src="images/iitk-black.png" alt="IIT Kanpur" style="width:120px;height:120px">
                </div>
                <div class="col-sm-9 col-md-10">
                    <div><h1>Transportation Engineering Laboratory</h1></div>
                    <div><h2>IIT Kanpur</h2></div>
                </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-sm-9">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                                News
                            </div>
                        <div class="panel-body">
                            <div class="filler-text" id="loremIpsum">
                                Lorem ipsum dolor sit amet, duo brute praesent ut. Diam equidem te nec. Cu pri dicta prompta gloriatur, te prima salutatus nam. Debet gloriatur sea no. Per sint iusto ea, eum ex putent intellegebat.<br>
                                Cu sea impetus facilisis. Vel omnis assueverit ne. Viris virtute fierent an sed, modus mazim ad sea. Iisque voluptaria mea te, eam sale vocibus quaerendum id. Ad iusto accusata referrentur quo. Te tempor facilisis per, ut usu stet saepe consectetuer, mei hinc nonumes cotidieque an.
                            </div>
                            <div class="filler-text"></div>
                            <div class="filler-text"></div>
                            <div class="filler-text"></div>
                            <div class="filler-text"></div>
                            <div class="filler-text"></div>
                            <div class="filler-text"></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Navigation
                        </div>
                        <div class="panel-body" style="padding:0">
                            <div class="list-group">
                                <li class="list-group-item dropdown">
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">People<span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">Faculty</a></li>
                                        <li><a href="#">Staff</a></li>
                                        <li><a href="#">Students</a></li>
                                        <li><a href="#">Alumni</a></li>
                                    </ul>
                                </li>
                                <a href="#" class="list-group-item">Facilities</a>
                                <a href="#" class="list-group-item">Consultancy Activities</a>
                                <a href="#" class="list-group-item">Courses</a>
                                <a href="#" class="list-group-item">Data</a>
                                <a href="#" class="list-group-item">News</a>
                            </div>
                            <div class="list-group">
                                <a href="#" class="list-group-item"><span class="glyphicon glyphicon-user"></span>Contact Us</a>
                                <a href="#" class="list-group-item">Civil Department</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="footer text-center">
            Footer
        </div>
    </div>
</body>
</html>

