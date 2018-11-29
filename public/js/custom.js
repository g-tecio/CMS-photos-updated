
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
    var apiurl = 'https://sjazup8js9.execute-api.us-west-1.amazonaws.com/prod/CMS_CONTENT'

    newfile.readAsDataURL(files[0]);
    newfile.onload = function() {
        let item = {
            tags: 'Test',
            src: 'sad' //newfile.result,
        }
        $.ajax({
            type: "POST", 
            url: apiurl, 
            crossDomain: true,
            data: JSON.stringify(item), 
            contentType: "application/json",
            dataType: "json", 
            success: function(data, status) {
                console.log(JSON.parse(this.data));
            }
        });
    }
}