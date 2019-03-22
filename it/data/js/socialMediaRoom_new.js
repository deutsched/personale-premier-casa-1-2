
/**
 * Facebook Social Plugin Privacy Protection
 */ 
/* define namespace */
var zo; // declares a global symbol
if (!zo) zo = {};
    else if (typeof zo != 'object')
        throw new Error('zo exists, but is not an object!');
zo.facebookBox = {
    cookieName: "dbSMR-fbActive" 
    , init: function() {
        // FB always active, change request 2014_03_19, ds
        this.activatePlugin(1);

/*
        var _this = this;
        if (this.getCookie(this.cookieName)) {
            this.activatePlugin(this.getCookie(this.cookieName));
        }
        jQuery('.smrActivatePlugin').bind('click', function(ev) {
            ev.preventDefault();
            var $this = jQuery(this)
                , state = $this.find('span.smrStateInactive').length ? 1 : 0;
            ;
            _this.activatePlugin(state);
        });
        jQuery('#fb-privacy-overlay').css('opacity', .85);
        jQuery('#fb-privacy-select a.fb-privacy-submit').bind('click', function(ev) {
            ev.preventDefault();
            _this.activatePlugin(jQuery('#fb-privacy-select select').val());
        });
*/


    }
    , activatePlugin: function(type) {
        var _this = this
            , type = type || 0
            , $container = jQuery('#fb-container')
            , $stateSwitch = $container.parent().parent().find('.smrActivatePlugin')
        ;
        // deactivate plugin
        if (type === 0) {
            $container
                .children()
                .not('#fb-privacy-protection')
                .remove()
                .end().show()
            ;
            $stateSwitch
                .find('.smrStateText').text('activate')
                .end()
                .find('.smrPluginState').toggleClass('smrStateInactive smrStateActive')
            ;
            this.removeCookie();
        }
        // activate plugin
        else {
            $container
                .find('#fb-privacy-protection').hide()
                .append('<div id="fb-root"></div>')
                //.append('<div id="fb-root"><iframe src="" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:364px; height:590px;" allowTransparency="true"></iframe></div>')
            ;
           /* jQuery.getScript('https://connect.facebook.net/en_US/all.js', function() {
                FB.init({appId: 'c84cea51fbbde9e98a3baafc9c94740f', 
                    status: true, 
                    cookie: false,
                    xfbml: true
                });
                $container.append('<fb:fan profile_id="115816835104562" connections="6" stream=true width="364" height="480" css="/italia/it/data/css/socialMediaRoom_Facebook_new.css?2"></fb:fan>');
            });*/
            $container.append('<iframe src="" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:364px; height:350px;" allowTransparency="true"></iframe>')

            $stateSwitch
                .find('.smrStateText').text('deactivate')
                .end()
                .find('.smrPluginState').toggleClass('smrStateInactive smrStateActive')
            ;
            // save to cookie
            if (type == '2') {
                this.setCookie(type);
            }
        }
    }
    , getCookie: function() {
        return jQuery.cookie(this.cookieName);
    }
    , setCookie: function(val) {
        var options = { path:'/', expires:10000 };
        jQuery.cookie(this.cookieName, val, options);
    }
    , removeCookie: function() {
        jQuery.cookie(this.cookieName, null, { path:'/', expires:-1 });
    }
};


/* Google Plus Public Stream */ 
zo.googlePlus = {
    init: function(apiKey, channelId, channelLink, itemCount) {
        jQuery.getJSON('https://www.googleapis.com/plus/v1/people/' + channelId + '/activities/public?key=' + apiKey, function (data) {
        var items = data['items'];
        var itemlist = [];
        jQuery.each(items, function (key, val) {
            itemlist.push(
              '<div class="gp-item">'
                + '<div class="logo">'
                + '    <a href="' + channelLink + '" target="_blank">'
                + '        <img src="' + val['actor']['image']['url'] + '" />'
                + '    </a>'
                + '</div>'
                + '<div class="text">'
                + '    <a href="' + channelLink + '" target="_blank">'
                + '        <span class="gp-channelName">Deutsche</span>'
                + '        <span class="gp-channelId"> +deutschebank</span>'
                + '    </a>'
                + '    <br />'
                + '    <a href="' + val['url'] + '" target="_blank">'
                +         val['title'] 
                + '    </a>'
                + '    <span class="date">'
                +         val['published'].substr(8,2) + '.' + val['published'].substr(5,2) + '.' + val['published'].substr(0,4)
                + '    </span>'
                + '</div>'
            + "</div>");
            if((key+1) == itemCount) return false;
        });
        jQuery("<div />", {
            html: itemlist.join("")
            }).appendTo("#gp-container").each(function() {
                jQuery('#gp-container').css('height', jQuery('#gp-container').height()+25 + 'px');
            });
        });
    }
};

/*
 * YouTube Plugin
 */
;(function($){
    $.fn.youtubeBox = function(options)
    {
        var opts = $.extend({}, $.fn.youtubeBox.defaults, options)
            , _this = this
        ;
        if (opts.format === "json") {
            $.getJSON('https://gdata.youtube.com/feeds/api/users/' +opts.username+ '/uploads?alt=' +opts.format+ '&v=2&max-results=' +opts.limit+ '&start-index=' +opts.startindex+ '&orderby=' +opts.orderby+ '&format=' +opts.vformat+ '&callback=?',
                function(response) {
                    if (response.feed && response.feed.entry.length > 0) {
                        $.fn.youtubeBox.build(response.feed, _this);
                    }
                }
            );
        }
        return this;
    };
    $.fn.youtubeBox.build = function(data, container) {
        $.each(data.entry, function(key) {
            var _this = this
                , impDate = this.published.$t.split('T')[0].split('-')
                , ytDate = new Date(impDate[0], impDate[1]-1, impDate[2])
                , moreLink = '<a href="#more" id="smrFullDescription" title="more">&hellip;</a>'
                , item = {
                    id: this.media$group.yt$videoid.$t
                    , date: ytDate.setDateFormat('dd.mm.yyyy')
                    , description: this.media$group.media$description.$t.length > 100 ? this.media$group.media$description.$t.substring(0,97)+ ' ' +moreLink : this.media$group.media$description.$t
                    , player: this.media$group.media$player.URL
                    , viewCount: this.yt$statistics ? this.yt$statistics.viewCount : 0
                    , thmubnail: this.media$group.media$thumbnail[4].url
                    , title: this.title.$t
                }
            ;
            // create youtube container with video and description
            $($.fn.youtubeBox.videoShow(item)).appendTo(container);
            // display the YouTube player
            $(container)
                .find('p.ytPlayer').loadVideo(item.id)
                .end()
                .find('a#smrFullDescription').bind('click', function(ev) {
                    ev.preventDefault();
                    $(this).closest('p.ytText').html(_this.media$group.media$description.$t).toggleClass('fullDescription')
                })
            ;
        });
    };
    $.fn.youtubeBox.videoShow = function(item) {
        var headline;
        try {
            headline = decodeURIComponent(escape(item.title));
        } catch(err) {
            headline = decodeURIComponent(item.title);
        }
        var string = '<div class="zoYoutube zoYoutubeId' +item.id+ '">' +
                     '   <p class="ytPlayer">' +
                     '       <a href="' +item.player+ '" class="ytStage" title="">' +
                     '           <img src="' +item.thmubnail.replace(/http:/g,'https:')+ '" alt="' +item.title+ '" />' +
                     '       </a>' +
                     '   </p>' +
                     '   <div class="ytInfo">' +
                     '       <p class="ytHeading font2">' +
                     '           <span class="ytDate">' +item.date+ '</span>' +
                     '           <span class="ytViews">' +item.viewCount+ '</span> views' +
                     '       </p>' +
                     '       <h2 class="black">' +headline+ '</h2>' +
                     //'       <p class="ytText">' +item.description+ '</p>' +
                     '   </div>' +
                     '</div>'
        ;
        return string;
    };
    $.fn.loadVideo = function(videoID) {
        var msPlayer = $(this)
            , width = msPlayer.width()
            , height = msPlayer.height()
            , videoSrc = 'https://www.youtube.com/embed/' +videoID
        ;
        msPlayer.html('<iframe class="youtube-player" type="text/html" width="' +width+ '" height="' +height+ '" src="' +videoSrc+ '" frameborder="0"></iframe>');
        return this;
    }
})(jQuery);
jQuery.fn.youtubeBox.defaults = {
    'format': 'json'
    , 'orderby': 'published'
    , 'vformat': 5
    , 'username': 'DeutscheBankGruppe'
    , 'limit': 25
    , 'startindex': 1
    , 'success': function() {}
};
/* */
/*
 * Flickr Plugin
 */
;(function($){
    $.fn.flickrBox = function(options)
    {
        var opts = $.extend({}, $.fn.flickrBox.defaults, options)
            , _this = this
            , apiURL = opts.apiURL
            , apiKey = opts.apiKey
            , photoSetIds = opts.photoSetIds
            , showPhotoSet = opts.showPhotoSet >= 0
                ? opts.showPhotoSet >= photoSetIds.length
                    ? 0
                    : opts.showPhotoSet
                : Math.floor(Math.random()*photoSetIds.length)
            , photoSetId = photoSetIds[showPhotoSet]
            , format = opts.format
            , perPage = opts.perPage
            , showPhotos = opts.showPhotos
            , showPhoto = opts.showPhoto
        ;
        opts.showPhotoSet = showPhotoSet;
        if (!$(this).find('.zoFlickrId' +photoSetId).length) {
            $.getJSON(apiURL,
                {
                    method:'flickr.photosets.getInfo'
                    , api_key:apiKey
                    , photoset_id:photoSetId
                    , format:format
                },
                function(info) {
                    if (info.stat === 'ok') {
                        $.getJSON(apiURL,
                            {
                                method:'flickr.photosets.getPhotos'
                                , api_key:apiKey
                                , photoset_id:photoSetId
                                , format:format
                                , per_page:10
                                , media:'photos'
                            },
                            function(photosetInfo) {
                                if (photosetInfo.stat === 'ok') {
                                    $.getJSON(apiURL,
                                        {
                                            method:'flickr.photos.getInfo'
                                            , api_key:apiKey
                                            , photo_id:photosetInfo.photoset.photo[showPhoto].id
                                            , secret:photosetInfo.photoset.photo[showPhoto].secret
                                            , format:format
                                        },
                                        function(photoInfo) {
                                            if (info.stat === 'ok' && photosetInfo.stat === 'ok' && photoInfo.stat === 'ok') {
                                                $.fn.flickrBox.build(opts, info.photoset, photosetInfo.photoset, photoInfo.photo, _this);
                                            }
                                        }
                                    );
                                }
                            }
                        );
                    } else {
                        $.fn.flickrBox.interval(_this, opts);
                    }
                }
            );
        } else {
            $.fn.flickrBox.transition($(this).find('.zoFlickrId' +photoSetId), opts);
        }
        return this;
    };
    $.fn.flickrBox.build = function(opts, info, photoset, photo, container)
    {
        var uploadDate = new Date(photo.dateuploaded*1000)
            , moreLink = '<a href="#more" id="flickrFullDescription" title="more">&hellip;</a>'
            , item = {
                id: info.id
                , photosetURL: 'https://secure.flickr.com/photos/' +photoset.owner+ '/sets/' +photoset.id
                , photoURL: 'https://farm' +photo.farm+ '.static.flickr.com/' +photo.server+ '/' +photo.id+ '_' +photo.secret+ '.' +(photo.originalformat ? photo.originalformat : 'jpg')
                , photoAlt: photo.title._content
                , date: uploadDate.setDateFormat('dd.mm.yyyy')
                , description: info.description._content.length > 100 ? info.description._content.substring(0,97)+ ' ' +moreLink : info.description._content
                , photoCount: info.photos
                , viewCount: photo.views
                , title: info.title._content
            }
        ;
        // create flickr container with photoSet image and description
        $($.fn.flickrBox.photoSet(item)).appendTo(container);
        if (opts.fadeTransition) {
            $.fn.flickrBox.transition($(container).find('.zoFlickrId' +item.id), opts, 'load');
        }
    };
    $.fn.flickrBox.transition = function($elem, opts, ev) {
        var $container = $elem.parent()
            , handler = function() { 
                $elem.find('h3').css('visibility','hidden');
                $container.find('.prev').fadeTo(opts.fadeInDuration, 0);
                $elem.fadeTo(opts.fadeInDuration,1, function() {
                    $elem.find('h3').css('visibility','visible');
                    $container
                        .height($elem.outerHeight(true))
                        .find('.prev')
                        .removeClass('prev')
                        .css('z-index', 0)
                    ;
                });
            }
        ;
        $container.find('.active').removeClass('active').addClass('prev').css('z-index', 1);
        $elem.fadeTo(0,0).addClass('active').css('z-index', 2);
        if (ev === 'load') {
            $elem
                .find('.flickrPhoto img').bind('load', function(ev) {
                    handler();
                })
            ;
        } else {
            handler();
        }
        if (opts.photoSetIds.constructor == Array && opts.photoSetIds.length > 0) {
            $.fn.flickrBox.interval($container, opts);
        }
    };
    $.fn.flickrBox.interval = function(elem, opts) {
        var st = window.setTimeout(function() {
            $(elem).flickrBox({
                'apiKey': opts.apiKey
                , 'photoSetIds': opts.photoSetIds
                , 'showPhotoSet': ++opts.showPhotoSet
                , 'format': opts.format
                , 'perPage': opts.perPage
                , 'showPhoto': opts.showPhoto
            });
        }, opts.loopDuration);
    };
    $.fn.flickrBox.photoSet = function(item) {
        var string = '<div class="zoFlickr zoFlickrId' +item.id+ '">' +
                     '   <p class="flickrPhoto">' +
                     '       <a href="' +item.photosetURL+ '" class="flickrPhotoset" title="' +item.photoAlt+ '" target="_blank">' +
                     '           <img src="' +item.photoURL+ '" alt="' +item.photoAlt+ '" />' +
                     '       </a>' +
                     '   </p>' +
                     '   <div class="flInfo">' +
                     '       <p class="flHeading font2">' +
                     '           <span class="flDate">' +item.photoCount+ ' photos</span>' +
                     '           <span class="flViews">' +item.viewCount+ '</span> views' +
                     '       </p>' +
                     '       <h2 class="black">' +item.title+ '</h2>' +
                     //'       <p class="flText">' +item.description+ '</p>' +
                     '   </div>' +
                     '</div>'
        ;
        return string;
    };
})(jQuery);
jQuery.fn.flickrBox.defaults = {
    'apiURL': 'https://secure.flickr.com/services/rest/?jsoncallback=?'
    , 'apiKey': ''
    , 'photoSetIds': []
    , 'showPhotoSet': 0
    , 'photoSetId': ''
    , 'format': 'json'
    , 'perPage': 10
    , 'showPhotos': []
    , 'showPhoto': 0
    , 'fadeTransition': true
    , 'fadeInDuration': 600
    , 'loopDuration': 5000
};
/* */
/* Click trigger */
;(function($) {
    $.fn.openTab = function() {
        var $this = $(this)
            , tab = $this.attr('href').split('#')[1]
        ;
        $this.bind('click', function(ev) {
            ev.preventDefault();
            $('div.tabButton a[href*=#' +tab+ ']').trigger('click');
            $(window).scrollTop($('.tabContainer').offset()['top']);
        });
        return this;
    };
})(jQuery);
/* */


/*
 * CMS Flickr Plugin
 */
;(function($){
    $.fn.CMSflickrBox = function(options)
    {
        var opts = $.extend({}, $.fn.CMSflickrBox.defaults, options)
            , _this = this
            , feedJSON=opts.feedJSON
            , photoSetIds = feedJSON.photoSetIds
            , showPhotoSet = opts.showPhotoSet >= 0
                ? opts.showPhotoSet >= photoSetIds.length
                    ? 0
                    : opts.showPhotoSet
                : Math.floor(Math.random()*photoSetIds.length)
            , photoSetId = photoSetIds[showPhotoSet]
            , format = opts.format
            , perPage = opts.perPage
            , showPhotos = opts.showPhotos
            , showPhoto = opts.showPhoto
        ;
        opts.showPhotoSet = showPhotoSet;
        if (!$(this).find('.zoFlickrId' +photoSetId).length) {
            var thisSet=feedJSON[photoSetId];
            $.fn.CMSflickrBox.build(opts, thisSet[0], thisSet[1], thisSet[2], _this);
        } else {
            $.fn.CMSflickrBox.transition($(this).find('.zoFlickrId' +photoSetId), opts);
        }
        return this;
    };
    $.fn.CMSflickrBox.build = function(opts, info, photoset, photo, container)
    {
        var uploadDate = new Date(photo.dateuploaded*1000)
            , moreLink = '<a href="#more" id="flickrFullDescription" title="more">&hellip;</a>'
            , item = {
                id: info.id
                , photosetURL: 'https://secure.flickr.com/photos/' +photoset.owner+ '/sets/' +photoset.id
                , photoURL: 'https://farm' +photo.farm+ '.static.flickr.com/' +photo.server+ '/' +photo.id+ '_' +photo.secret+ '.' +(photo.originalformat ? photo.originalformat : 'jpg')
                , photoAlt: photo.title._content
                , date: uploadDate.setDateFormat('dd.mm.yyyy')
                , description: info.description._content.length > 100 ? info.description._content.substring(0,97)+ ' ' +moreLink : info.description._content
                , photoCount: info.photos
                , viewCount: photo.views
                , title: info.title._content
            }
        ;
        // create flickr container with photoSet image and description
        $($.fn.CMSflickrBox.photoSet(item)).appendTo(container);
        if (opts.fadeTransition) {
            $.fn.CMSflickrBox.transition($(container).find('.zoFlickrId' +item.id), opts, 'load');
        }
    };
    $.fn.CMSflickrBox.transition = function($elem, opts, ev) {
        var $container = $elem.parent()
            , handler = function() { 
                $elem.find('h3').css('visibility','hidden');
                $container.find('.prev').fadeTo(opts.fadeInDuration, 0);
                $elem.fadeTo(opts.fadeInDuration,1, function() {
                    $elem.find('h3').css('visibility','visible');
                    $container
                        .height($elem.outerHeight(true))
                        .find('.prev')
                        .removeClass('prev')
                        .css('z-index', 0)
                    ;
                });
            }
        ;
        $container.find('.active').removeClass('active').addClass('prev').css('z-index', 1);
        $elem.fadeTo(0,0).addClass('active').css('z-index', 2);
        if (ev === 'load') {
            $elem
                .find('.flickrPhoto img').bind('load', function(ev) {
                    handler();
                })
            ;
        } else {
            handler();
        }
        if (opts.feedJSON.photoSetIds.constructor == Array && opts.feedJSON.photoSetIds.length > 0) {
            $.fn.CMSflickrBox.interval($container, opts);
        }
    };
    $.fn.CMSflickrBox.interval = function(elem, opts) {
        var st = window.setTimeout(function() {
            $(elem).CMSflickrBox({
                'feedJSON':opts.feedJSON
                , 'showPhotoSet': ++opts.showPhotoSet
                , 'format': opts.format
                , 'perPage': opts.perPage
                , 'showPhoto': opts.showPhoto
            });
        }, opts.loopDuration);
    };
    $.fn.CMSflickrBox.photoSet = function(item) {
        var string = '<div class="zoFlickr zoFlickrId' +item.id+ '">' +
                     '   <p class="flickrPhoto">' +
                     '       <a href="' +item.photosetURL+ '" class="flickrPhotoset" title="' +item.photoAlt+ '" target="_blank">' +
                     '           <img src="' +item.photoURL+ '" alt="' +item.photoAlt+ '" />' +
                     '       </a>' +
                     '   </p>' +
                     '   <div class="flInfo">' +
                     '       <p class="flHeading font2">' +
                     '           <span class="flDate">' +item.photoCount+ ' photos</span>' +
                     '           <span class="flViews">' +item.viewCount+ '</span> views' +
                     '       </p>' +
                     '       <h2 class="black">' +item.title+ '</h2>' +
                     //'       <p class="flText">' +item.description+ '</p>' +
                     '   </div>' +
                     '</div>'
        ;
        return string;
    };
})(jQuery);
jQuery.fn.CMSflickrBox.defaults = {
    'apiURL': 'https://secure.flickr.com/services/rest/?jsoncallback=?'
    , 'apiKey': ''
    , 'photoSetIds': []
    , 'showPhotoSet': 0
    , 'photoSetId': ''
    , 'format': 'json'
    , 'perPage': 10
    , 'showPhotos': []
    , 'showPhoto': 0
    , 'fadeTransition': true
    , 'fadeInDuration': 600
    , 'loopDuration': 5000
};
/* */

 
 
/* */
 