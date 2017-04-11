
define({
    createCards: function(cardsData, container) {
        var str = '';
        for (var i = 0, len=cardsData.length; i < len; ++i){
            var data = cardsData[i];
            str += '<div class="card">' +
                        '<div class="card__content">' +
                            '<div class="card__header">' +
                                '<div class="card__authorPhoto"><img src="' + data.userPhotoUrl + '" /></div>' +
                                '<div class="card__authorData">' +
                                    '<span class="card_bold">' + data.userName + '</span><br>' +
                                    '<span>' + data.postLocation + '</span>' +
                                '</div>' +
                                '<div class="card__date card_grayText"><span>' + data.creationDate + '</span></div>' +
                            '</div>' +
                            '<div class="card__postImage">' +
                                '<a href="' + data.link + '">'+
                                    '<img src="' + data.postImageUrl + '" />' +
                                '</a>' +
                            '</div>' +
                            '<div class="card__postData">' +
                                '<div class="card__postStat">' +
                                    '<img src="images/like.png"/>' +
                                    '<span>' + data.likesCount + '</span>' +
                                '</div>' +
                                '<div class="card__postDescription">' +
                                    data.postDescription +
                                '</div>' +
                        '</div>' +
                    '</div>' +
                                            
                '</div>';


        }

        container.innerHTML = str;
    }
});