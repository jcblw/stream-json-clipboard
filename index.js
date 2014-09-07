var 
jsonStream = require( 'JSONStream' ),
argv = require('minimist')(process.argv.slice(2)),
formatToString = require( './src/parse' ),
write = require( './src/write' ),
key = argv.k || argv.key,
prefix = argv.p || argv.prefix || '',
humanize = argv.h || argv.humanize;  

if ( !key ) {
    process.stderr.write( 'Please provide a key ( -k ) to specify which key to copy' );
    process.exit( );
    return;
}

write( process.stdin
    .pipe( jsonStream.parse() )
    .pipe( formatToString( key, { 
        prefix: prefix,
        humanize: humanize
    } ) ) );