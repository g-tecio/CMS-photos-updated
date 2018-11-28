
$("#imageUpload").change(function() {
    readURL(this);
});


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn();
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function printfile(){
    var newfile = new FileReader();
    var files = document.getElementById('imageUpload').files;
    var apiurl = 'https://sb96ocyaj1.execute-api.us-west-1.amazonaws.com/prod/upload-to-s3'
    // if (files.length > 0) {
    //     getBase64(files[0]);
    // }
    newfile.readAsDataURL(files[0]);
    newfile.onload = function() {
        let item = {
           img: newfile.result,
           tag: ['coool','chido','feo']
        }
        $.ajax({
            type: "POST", 
            url: apiurl, 
            crossDomain: true,
            data: JSON.stringify(item), 
            contentType: "application/json",
            dataType: "json", 
            success: function(data, status) {
                console.log(JSON.parse(this.data).img);
    
            }
        });
    }
   
}

// function getBase64(file) {
//     newfile = new FileReader();
//     newfile.readAsDataURL(file);
//     newfile.onload = function () {
//         // return newfile.result
//     };
//     newfile.onerror = function (error) {
//         console.log('Error: ', error);
//     };

// }