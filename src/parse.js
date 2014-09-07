var 
Transform = require( 'stream' ).Transform,
humanize = require( 'string-humanize' ),
formatToString = new Transform( {
    objectMode: true
} );


module.exports = function( key, options ){
    formatToString._transform = parseJSONCommit;
    function parseJSONCommit ( chunk, enc, done ) {
        var _chunk = options.humanize ? humanize( chunk[ key ] ) : chunk[ key ];  
        this.push ( options.prefix + _chunk + '\r\n' );
        done();
    }
    return formatToString; 
};