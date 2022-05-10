const memory = require('./index')

describe('memory', () => {
  describe('first step', () => {
    it('should return second position when number 1 is in display', () => {
      const resp = memory(1)
      expect(resp).toEqual(expect.objectContaining({ "pos": 2 }))
    })

    it('should return second position when number 2 is in display', () => {
      const resp = memory(2)
      expect(resp).toEqual(expect.objectContaining({ "pos": 2 }))
    })

    it('should return third position when number 3 is in display', () => {
      const resp = memory(3)
      expect(resp).toEqual(expect.objectContaining({ "pos": 3 }))
    })

    it('should return third position when number 4 is in display', () => {
      const resp = memory(4)
      expect(resp).toEqual(expect.objectContaining({ "pos": 4 }))
    })
  })

  describe('second step', () => {
    it('should return with number 4 when 1 is in display', () => {
      const resp = memory(1, [{ pos: 1, num: 3 }])
      expect(resp).toEqual(expect.objectContaining({ "num": 4 }))
    })

    it('should return the same position pressed on first step when number 2 is in display', () => {
      const resp = memory(2, [{ pos: 1, num: 3 }])
      expect(resp).toEqual(expect.objectContaining({ "pos": 1 }))
    })

    it('should return the first position when number 3 is in display', () => {
      const resp = memory(3, [{ pos: 1, num: 3 }])
      expect(resp).toEqual(expect.objectContaining({ "pos": 1 }))
    })

    it('should return the same position pressed on first step when number 4 is in display', () => {
      const resp = memory(4, [{ pos: 1, num: 3 }])
      expect(resp).toEqual(expect.objectContaining({ "pos": 1 }))
    })
  })

  describe('third step', () => {
    it('should return the number pressed on second step when number 1 is in display', () => {
      const resp = memory(1, [{ pos: 1, num: 3 }, { pos: 2, num: 3 }])
      expect(resp).toEqual(expect.objectContaining({ "num": 3 }))
    })

    it('should return the number pressed on first step when number 2 is in display', () => {
      const resp = memory(2, [{ pos: 1, num: 3 }, { pos: 2, num: 4 }])
      expect(resp).toEqual(expect.objectContaining({ "num": 3 }))
    })

    it('should return the third position when number 3 is in display', () => {
      const resp = memory(3, [{ pos: 1, num: 3 }, { pos: 2, num: 4 }])
      expect(resp).toEqual(expect.objectContaining({ "pos": 3 }))
    })

    it('should return the button with number 4 when number 4 is in display', () => {
      const resp = memory(4, [{ pos: 1, num: 3 }, { pos: 2, num: 4 }])
      expect(resp).toEqual(expect.objectContaining({ "num": 4 }))
    })
  })

  describe('fourth step', () => {
    it('should return the same position pressed on first step when number 1 is in display', () => {
      const resp = memory(1, [{ pos: 1, num: 3 }, { pos: 2, num: 3 }, { pos: 3, num: 1 }])
      expect(resp).toEqual(expect.objectContaining({ "pos": 1 }))
    })

    it('should return the first position when number 2 is in display', () => {
      const resp = memory(2, [{ pos: 1, num: 3 }, { pos: 2, num: 3 }, { pos: 3, num: 1 }])
      expect(resp).toEqual(expect.objectContaining({ "pos": 1 }))
    })

    it('should return the same position pressed on second step when number 3 is in display', () => {
      const resp = memory(3, [{ pos: 1, num: 3 }, { pos: 2, num: 3 }, { pos: 3, num: 1 }])
      expect(resp).toEqual(expect.objectContaining({ "pos": 2 }))
    })

    it('should return the same position pressed on second step when number 4 is in display', () => {
      const resp = memory(4, [{ pos: 1, num: 3 }, { pos: 2, num: 3 }, { pos: 3, num: 1 }])
      expect(resp).toEqual(expect.objectContaining({ "pos": 2 }))
    })
  })

  describe('fifth step', () => {
    it('should return the same number pressed on first step when number 1 is in display', () => {
      const resp = memory(1, [{ pos: 1, num: 1 }, { pos: 2, num: 2 }, { pos: 3, num: 3 }, { pos: 4, num: 4 }])
      expect(resp).toEqual(expect.objectContaining({ "num": 1 }))
    })

    it('should return the same number pressed on second step when number 2 is in display', () => {
      const resp = memory(2, [{ pos: 1, num: 1 }, { pos: 2, num: 2 }, { pos: 3, num: 3 }, { pos: 4, num: 4 }])
      expect(resp).toEqual(expect.objectContaining({ "num": 2 }))
    })

    it('should return the same number pressed on fourth step when number 3 is in display', () => {
      const resp = memory(3, [{ pos: 1, num: 1 }, { pos: 2, num: 2 }, { pos: 3, num: 3 }, { pos: 4, num: 4 }])
      expect(resp).toEqual(expect.objectContaining({ "num": 4 }))
    })

    it('should return the same number pressed on third step when number 4 is in display', () => {
      const resp = memory(4, [{ pos: 1, num: 1 }, { pos: 2, num: 2 }, { pos: 3, num: 3 }, { pos: 4, num: 4 }])
      expect(resp).toEqual(expect.objectContaining({ "num": 3 }))
    })
  })
})
