var 
clipboard = require( 'copy-paste').noConflict();

module.exports = function( readStream ) {
    clipboard.copy( readStream, function(){
        process.stdout.write( 'Data written to clipboard' );
        process.exit( 0 );        
    } ); 
}
