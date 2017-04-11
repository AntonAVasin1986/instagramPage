var token = '31882859.5bc2f5b.764b575608dd4a019919685519ed9efc', 
   userid = 31882859, 
   count = 20;

define({
    getData: function (callback, error) {
        $.ajax({
            url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
            dataType: 'jsonp',
            type: 'GET',
            data: {
                access_token: token, 
                count: count
            },
            success: function(data) {
                callback(data.data);
            },
            error: function(data) {
                error(data);
            }
        });
    }
});