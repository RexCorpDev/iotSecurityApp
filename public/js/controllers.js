'use strict';

var app = angular.module('iotHackathonSecurity');


app.controller('homeCtrl', function($scope, $state){
  console.log('homeCtrl');

});

app.controller('gridCtrl', function($scope, $state){
  console.log('gridCtrl');



  $scope.newPost = () =>

  //---ACTIVE SHOOTER
  // swal({
  //   title: "Possible ACTIVE SHOOTER!",
  //   text: "ALERT ALERT ALERT ALERT ALERT ALERT!",
  //   type: "warning",
  //   showCancelButton: true,
  //   confirmButtonColor: "#e90000",
  //   confirmButtonText: "Open",
  //   imageUrl: "http://www.spartancops.com/wp-content/uploads/2009/08/kleboldandharris.jpg",
  //
  // });


});

app.controller('logCtrl', function($scope, $state){
  console.log('logCtrl');



  $scope.newPost = postBody =>

  //---ACTIVE SHOOTER
  // swal({
  //   title: "Possible ACTIVE SHOOTER!",
  //   text: "ALERT ALERT ALERT ALERT ALERT ALERT!",
  //   type: "warning",
  //   showCancelButton: true,
  //   confirmButtonColor: "#e90000",
  //   confirmButtonText: "Open",
  //   imageUrl: "http://www.spartancops.com/wp-content/uploads/2009/08/kleboldandharris.jpg",
  //
  // });

  // --- ARE YOU SURE
  // swal({
  //   title: "Are you sure?",
  //   text: "Your will not be able to recover this imaginary file!",
  //   type: "warning",
  //   showCancelButton: true,
  //   confirmButtonColor: "#DD6B55",
  //   confirmButtonText: "Yes, delete it!",
  //   closeOnConfirm: false},
  //   function(){
  //     swal("Booyah!");
  //   });

  // swal("SENT!", "ALL MEMBERS NOTIFIED", "success");

  // --- MESSAGE SENT
  // swal({   imageUrl: "https://cdn3.iconfinder.com/data/icons/school-and-education/39/school_icons_paper_plane_icon-512.png",title: "SENT!",   text: "All members NOTIFIED of THREAT.",   timer: 3000,   showConfirmButton: false });

  // --- All Doors Locked
  // swal({   imageUrl: "http://icons.iconarchive.com/icons/svengraph/i-love/512/Lock-icon.png",title: "LOCKED",   text: "Perimeter Doors Locked:\n\n 1st Floor : CAFETERIA \n 1st Floor : CONF. ROOM \n 1st Floor : E. STAIRWELL ",   timer: 6000,   showConfirmButton: false });

  // --- All Doors Locked
  // swal({   imageUrl: "http://a3.mzstatic.com/eu/r30/Purple/v4/1a/4f/d4/1a4fd437-acda-c10c-dfcd-5275980ffdfe/icon128-2x.png",title: "Calling 911",   text: "Silent Alert Sent to: SANTA CLARA POLICE DEPARTMENT"\n\n "ETA : 8 MINUTES" \n "1st Floor : E. STAIRWELL",   timer: 6000,   showConfirmButton: false });



});

app.controller('alertCtrl', function($scope, $state){
  console.log('alertCtrl');


    $scope.newPost = () =>

    //---ACTIVE SHOOTER
    // swal({
    //   title: "Possible ACTIVE SHOOTER!",
    //   text: "ALERT ALERT ALERT ALERT ALERT ALERT!",
    //   type: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#e90000",
    //   confirmButtonText: "Open",
    //   imageUrl: "http://www.spartancops.com/wp-content/uploads/2009/08/kleboldandharris.jpg",
    //
    // });

    // --- ARE YOU SURE
    // swal({
    //   title: "Are you sure?",
    //   text: "Your will not be able to recover this imaginary file!",
    //   type: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#DD6B55",
    //   confirmButtonText: "Yes, delete it!",
    //   closeOnConfirm: false},
    //   function(){
    //     swal("Booyah!");
    //   });

    // swal("SENT!", "ALL MEMBERS NOTIFIED", "success");

    // --- Alert Message Sent
    // swal({   imageUrl: "https://cdn3.iconfinder.com/data/icons/school-and-education/39/school_icons_paper_plane_icon-512.png",title: "SENT!",   text: "All members NOTIFIED of THREAT.",   timer: 3000,   showConfirmButton: false });

    // --- All Doors Locked
    // swal({   imageUrl: "http://icons.iconarchive.com/icons/svengraph/i-love/512/Lock-icon.png",title: "LOCKED",   text: "Perimeter Doors Locked:\n\n 1st Floor : CAFETERIA \n 1st Floor : CONF. ROOM \n 1st Floor : E. STAIRWELL ",   timer: 6000,   showConfirmButton: false });

    // --- 911
    // swal({   imageUrl: "http://a3.mzstatic.com/eu/r30/Purple/v4/1a/4f/d4/1a4fd437-acda-c10c-dfcd-5275980ffdfe/icon128-2x.png",title: "Calling 911",   text: "Silent Alert Sent to: SANTA CLARA POLICE DEPARTMENT"\n\n "ETA : 8 MINUTES" \n "1st Floor : E. STAIRWELL",   timer: 6000,   showConfirmButton: false });


});
