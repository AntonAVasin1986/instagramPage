requirejs.config({
    baseUrl: 'js',

    paths: {
        lib: '../lib'
    }
});

requirejs(['card', 'instagramAPI', 'utils'],
function   (card, instagramAPI, utils) {

    instagramAPI.getData(function(data) {
        var cardsData = [];
        for (var i=0, len=data.length; i < len; ++i) {
            var dataItem = data[i];
            cardsData.push({
                userPhotoUrl: dataItem.user.profile_picture,
                userName: dataItem.user.username,
                postLocation: dataItem.location ? (dataItem.location.name || '') : '',
                creationDate: utils.calculateCreatedTimeRange(dataItem.created_time),
                postImageUrl: dataItem.images.standard_resolution.url,
                likesCount: dataItem.likes.count,
                postDescription: dataItem.caption ? dataItem.caption.text : "",
                link: dataItem.link
            });
        }
        card.createCards(cardsData, document.body);
    },
    function(data){
        console.error(data);
    });
});