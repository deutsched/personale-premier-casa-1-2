/**
 * DB Core
 *
 */
/* define namespace */
var db; // declares a global symbol
if (!db) db = {};
    else if (typeof db != 'object')
        throw new Error('db exists, but is not an object!');
/* define sub-namespace */
db.core = {};

/* JS Core Extensions */
Function.prototype.method = function(name, func) {
    this.prototype[ name ] = func;
    return this;
};
String.method('replaceAll', function(search, replace) {
    var string = this
        , regexp
    ;
    for (var i = -1, l = search.length; ++i < l;) {
        regexp = new RegExp(search[i], 'g');
        string = string.replace(regexp, replace[i]);
    }
    return string;
});
String.method('htmlentities_encode', function() {
    var search = ['<', '>', '"', '\'', '&', 'ä', 'Ä', 'ö', 'Ö', 'ü', 'Ü', 'ß']
        , replace = ['&lt;', '&gt;', '&quot;', '&apos;', '&amp;', '&auml;', '&Auml;', '&ouml;', '&Ouml;', '&uuml;', '&Uuml;', '&szlig;']
    ;
    return this.replaceAll(search, replace);
});
String.method('htmlentities_decode', function() {
    var search = ['&lt;', '&gt;', '&quot;', '&apos;', '&amp;']
        , replace = ['<', '>', '"', '\'', '&']
    ;
    return this.replaceAll(search, replace);
});
String.method('endsWith', function(str) {
    var regexp = new RegExp(str+ '$');
    return this.toString().match(regexp) == str;
});
Date.method('toLangDateString', function(monthnames) {
    var day = this.getDate() < 10 ? '0' +this.getDate() : this.getDate()
        , month = this.getMonth()
        , year = this.getFullYear()
        , monthnames = monthnames || db.core.data.monthnames
    ;
    return (day+ '. ' +monthnames[month]+ ' ' +year);
});

/*
 * monthname (Boolean) true if month as fullname (ie January)
 */
Date.method('setDateFormat', function(format, monthname, monthnames) {
    var day = this.getDate()
        , monthnames = monthnames || db.core.data.monthnames
        , monthname = monthname || false
        , month = monthname === true ? monthnames[this.getMonth()] : this.getMonth()+1
        , year = this.getFullYear()
    ;
    day = day < 10 ? "0" +day : day;
    month = month < 10 ? "0" +month : month;
    return format.replaceAll(['dd', 'mm', 'yyyy'], [day, month, year]);
});

/* Core Data */
db.core.data = {
    /* Date */
    monthnames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

/* */