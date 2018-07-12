describe('Dom API:', function () {
  describe('#getId(id)', function () {
    it(`wutils.getId() should return true`, function () {
      assert(wutils.getScrollTop('#app') === document.querySelector('#app'));
    })
  });
});