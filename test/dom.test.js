describe('Dom API:', function () {
  describe('#getId(id)', function () {
    it(`wutils.getId() 测试应该返回真`, function () {
      assert(wutils.getId('#app') === document.querySelector('#app'));
    })
  });
});