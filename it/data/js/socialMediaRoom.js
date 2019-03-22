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
        var _this = this;
        if (this.getCookie(this.cookieName)) {
            this.activatePlugin(this.getCookie(this.cookieName));
        }
        jQuery('.smrActivatePlugin').bind('click', function(ev) {
            ev.preventDefault();
            var $this = jQuery(this)
                , state = $this.find('span').hasClass('smrStateInactive') ? 1 : 0;
            ;
            _this.activatePlugin(state);
        });
        jQuery('#fb-privacy-overlay').css('opacity', .85);
        jQuery('#fb-privacy-select a.fb-privacy-submit').bind('click', function(ev) {
            ev.preventDefault();
            _this.activatePlugin(jQuery('#fb-privacy-select select').val());
        });
    }
    , activatePlugin: function(type) {
        var _this = this
            , type = type || 0
            , $container = jQuery('#fb-container')
            , $stateSwitch = $container.parent().find('h3 .smrActivatePlugin')
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
            ;
            jQuery.getScript('https://connect.facebook.net/en_US/all.js', function() {
                FB.init({appId: 'c84cea51fbbde9e98a3baafc9c94740f', 
                    status: true, 
                    cookie: false,
                    xfbml: true
                });
                $container.append('<fb:fan profile_id="115816835104562" connections="6" stream=true width="364" height="350" css="https://www.db.com/italia/it/content/fbFanBox.css?2"></fb:fan>');
            });
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





// jquery.jsonp 2.1.4 (c)2010 Julian Aubourg | MIT License
// http://code.google.com/p/jquery-jsonp/
(function(e,b){function d(){}function t(C){c=[C]}function m(C){f.insertBefore(C,f.firstChild)}function l(E,C,D){return E&&E.apply(C.context||C,D)}function k(C){return/\?/.test(C)?"&":"?"}var n="async",s="charset",q="",A="error",r="_jqjsp",w="on",o=w+"click",p=w+A,a=w+"load",i=w+"readystatechange",z="removeChild",g="<script/>",v="success",y="timeout",x=e.browser,f=e("head")[0]||document.documentElement,u={},j=0,c,h={callback:r,url:location.href};function B(C){C=e.extend({},h,C);var Q=C.complete,E=C.dataFilter,M=C.callbackParameter,R=C.callback,G=C.cache,J=C.pageCache,I=C.charset,D=C.url,L=C.data,P=C.timeout,O,K=0,H=d;C.abort=function(){!K++&&H()};if(l(C.beforeSend,C,[C])===false||K){return C}D=D||q;L=L?((typeof L)=="string"?L:e.param(L,C.traditional)):q;D+=L?(k(D)+L):q;M&&(D+=k(D)+encodeURIComponent(M)+"=?");!G&&!J&&(D+=k(D)+"_"+(new Date()).getTime()+"=");D=D.replace(/=\?(&|$)/,"="+R+"$1");function N(S){!K++&&b(function(){H();J&&(u[D]={s:[S]});E&&(S=E.apply(C,[S]));l(C.success,C,[S,v]);l(Q,C,[C,v])},0)}function F(S){!K++&&b(function(){H();J&&S!=y&&(u[D]=S);l(C.error,C,[C,S]);l(Q,C,[C,S])},0)}J&&(O=u[D])?(O.s?N(O.s[0]):F(O)):b(function(T,S,U){if(!K){U=P>0&&b(function(){F(y)},P);H=function(){U&&clearTimeout(U);T[i]=T[o]=T[a]=T[p]=null;f[z](T);S&&f[z](S)};window[R]=t;T=e(g)[0];T.id=r+j++;if(I){T[s]=I}function V(W){(T[o]||d)();W=c;c=undefined;W?N(W[0]):F(A)}if(x.msie){T.event=o;T.htmlFor=T.id;T[i]=function(){/loaded|complete/.test(T.readyState)&&V()}}else{T[p]=T[a]=V;x.opera?((S=e(g)[0]).text="jQuery('#"+T.id+"')[0]."+p+"()"):T[n]=n}T.src=D;m(T);S&&m(S)}},0);return C}B.setup=function(C){e.extend(h,C)};e.jsonp=B})(jQuery,setTimeout);

/*
 * Twitter Plugin
 */
;(function($){
    $.fn.twitterBox = function(options)
    {
        var opts = $.extend({}, $.fn.twitterBox.defaults, options)
            , _this = this
            , extSearch = opts.extSearch ? '+' +opts.extSearch : ''
        ;
        if (opts.format === "JSON") {
            //$.getJSON('http://search.twitter.com/search.json?q=from%3A' +opts.username+extSearch+ '&rpp=' +opts.rpp+ '&callback=?',
/*
            $.getJSON('https://api.twitter.com/1/statuses/user_timeline.json?count=' +opts.rpp+ '&screen_name=' +opts.username+ '&callback=?',
                function(data) {
                    if (data.results && data.results.length > 0) {
                        $.fn.twitterBox.build(data.results, _this);
                    }else {
                        $.fn.twitterBox.build(data, _this);
                    }
                }
            );
*/
            $.jsonp({
                url: 'https://api.twitter.com/1/statuses/user_timeline.json?count=' +opts.rpp+ '&screen_name=' +opts.username+extSearch+ '&callback=?'
                , success: function(data, txtStat) {
                    $.fn.twitterBox.build(data, _this);
                }
                , error: function(xOptions, txtStat) {
                    $.getJSON('https://search.twitter.com/search.json?q=from%3A' +opts.username+extSearch+ '&rpp=' +opts.rpp+ '&callback=?',
                        function(data) {
                            $.fn.twitterBox.build(data.results, _this);
                        }
                    );
                }
            });
        }
        return this;
    };
    $.fn.twitterBox.build = function(data, container) {
        var url = /(http[s]?):\/\/([\w.]+)\/(\S*)/g;
        $.each(data, function(key) {
            //var twUnDate = this.created_at.split(' ')
            var twUnDate = this.created_at.indexOf(',') > -1 ? this.created_at : this.created_at.split(' ')
                , twDate = twUnDate instanceof Array ? twUnDate[0]+ ', ' +twUnDate[2]+ ' ' +twUnDate[1]+ ' ' +twUnDate[5]+ ' ' +twUnDate[3]+ ' ' +twUnDate[4] : twUnDate
                , twSource = this.source.htmlentities_decode().indexOf('<') > -1 ? this.source.htmlentities_decode().match(/>(.*)</)[1] : this.source
                , tweet = {
                    key: key
                    //, date: $.fn.twitterBox.sinceDate(twUnDate[0]+ ', ' +twUnDate[2]+ ' ' +twUnDate[1]+ ' ' +twUnDate[5]+ ' ' +twUnDate[3]+ ' ' +twUnDate[4])
                    , date: $.fn.twitterBox.sinceDate(twDate)
                    , text: this.text
                    , url: this.text.match(url)
                    , link: ''
                    , source: twSource
                }
            ;
            if (tweet.url !== null) {
                for (var i = -1, l=tweet.url.length; ++i < l;) {
                    // build anchor with the parsed url
                    tweet.link = '<a href="' +tweet.url[i]+ '" ' +(key === 0 ? ' class="font5"' : "")+ ' target="_blank">' +tweet.url[i]+ '</a>';                    // if the parsed url stands at the end of the text, 
                    // outsource the anchor
                    if (jQuery.trim(tweet.text).endsWith(jQuery.trim(tweet.url[i]))) {
                        tweet.text = tweet.text.replace(tweet.url[i], tweet.link);
                    } else {
                        // replace the url-string with the built anchor
                        tweet.text = tweet.text.replace(tweet.url[i], tweet.link);
                    }
                }
            }
            // create tweet container with date and text
            $($.fn.twitterBox.tweetShow(tweet)).appendTo(container);
        });
    };

    $.fn.twitterBox.sinceDate = function(created) {
        var dateNow = new Date()
            , timestampNow = dateNow.getTime()
            , dateCreated = new Date(created)
            , timestampCreated = dateCreated.getTime()
            , diff = 0
            , dateString = ""
        ;
        // if the creation date is within the last one HOUR
        if (timestampCreated > timestampNow - (60 * 60 *1000)) {
            diff = Math.round((timestampNow - timestampCreated) / (1000 * 60));
            dateString = "about " +diff+(diff == 1 ? " minute ago" : " minutes ago");
        }
        // if the creation date is within the last one DAY
        else if (timestampCreated > timestampNow - (24 * 60 * 60 *1000)) {
            diff = Math.round((timestampNow - timestampCreated) / (1000 * 60 * 60));
            dateString = "about " +diff+(diff == 1 ? " hour ago" : " hours ago");
        }
        else {
            //dateString = dateCreated.toLangDateString();
            dateString = dateCreated.setDateFormat('dd mm yyyy', true);
        }
        return dateString;
    };
    $.fn.twitterBox.tweetShow = function(tweet) {
        var string = '<div class="zoTweet zoTweetPos' +tweet.key+ '">' +
                     '   <p class="twText' +(tweet.key === 0 ? ' font5' : '')+ '">' +tweet.text+ '</p>' +
                     //'   <p class="twLink">' +tweet.link+ '</p>' +
                     '   <p class="twSource font2">' +
                     '       <span class="twDate">' +tweet.date+ '</span>' +
                     '       via <span class="twPlattform">' +tweet.source+ '</span>' +
                     '   </p>' +
                     '</div>'
        ;
        return string;
    };
})(jQuery);
jQuery.fn.twitterBox.defaults = {
    'format': 'JSON'
    , 'username': 'twitter'
    , 'lang': 'en'
    , 'rpp': 3
};
/* */
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