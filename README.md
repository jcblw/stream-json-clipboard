# Stream JSON Clipboard

[![Greenkeeper badge](https://badges.greenkeeper.io/jcblw/stream-json-clipboard.svg)](https://greenkeeper.io/)

This is a utility to stream a key from a json stream into your clipboard. 

## Install

    $ npm install stream-json-clipboard -g
    
## Usage

    $ stream-json-clipboard -k <key> [ flags ]

#### Example Usage

Right now this tool way built for a specific reason which was to automate the process of writting update emails. So in tandum with this module I built [node-git-activity](http://github.com/jcblw/node-git-activity) which makes streaming json data from commits very easy. Now I can do things like.

    $ git-activity --me --json | stream-json-clipboard --humanize --prefix '- ' --key message

This will give me a nice, days worth, of comit messages explaining what I have done for that day. Now I just paste that information into my gmail.

#### Avaliable Flags

    -k, --key       The key to copy to clipboard
    -h, --humanize  Flag to change output to human readable ( removes dashs, slashs, etc )
    -p, --prefix    Prefix each line with given input.


