var fs = require('fs');

casper.start('tests/site/index.html', function() {
    var imageUrl = 'file://' + phantom.casperPath + '/tests/site/images/phantom.png';
    var image = this.base64encode(imageUrl);

    this.test.comment('Casper.base64encode()');
    this.test.assertEquals(image.length, 6160, 'Casper.base64encode() can retrieve base64 contents');

    this.test.comment('Casper.download()');
    this.download(imageUrl, '__test_logo.png');
    this.test.assert(fs.exists('__test_logo.png'), 'Casper.download() downloads a file');
    if (fs.exists('__test_logo.png')) {
        fs.remove('__test_logo.png');
    }
});

casper.run(function() {
    this.test.done();
});
