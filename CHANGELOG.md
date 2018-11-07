## Changelogs

### Version: Beta

2018-11-7

Change:
- gulp

  update gulp to version: 4.x.
  The gulpfile.js should be change
  ```javascript
  // Before
  gulp.task('default', [ 'jshint', 'copy-vender']);
  // After
  gulp.task('default', gulp.parallel( 'jshint', 'copy-vender', function(done){
    done();
  }));
  ```

- upload plugin config `upload.storage` = `disk`

- upgrade `backup.py`

2018-10-31

Add:
- Buckup.py
- 404page
- use `contentDom.val()` to get the val of the `Editor`

