webpackJsonp([0], {
  'Y/1k': function (t, e) {}, lVK7: function (t, e, s) {
    'use strict'
    Object.defineProperty(e, '__esModule', {value: !0})
    var n = {
      name: 'score-to-star',
      components: {},
      props: {
        total: {type: Number, default: 5},
        score: {type: Number, default: 2.6},
        size: {type: Number, default: 36},
        space: {type: String, default: 'middle'}
      },
      data: function () {return {}},
      computed: {
        starType: function () {
          return 'star-' + this.size + ' ' + this.space + '-space'
        },
        itemClasses: function () {
          this.score = this.score > this.total ? this.total : this.score
          for (var t = [], e = Math.floor(2 * this.score) / 2, s = e % 1 !=
            0, n = Math.floor(e), a = 0; a < n; a++)t.push('on');
          for (s && t.push('half'); t.length < this.total;)t.push('off');
          return t
        }
      },
      methods: {}
    }, a = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t
        return e('div', {staticClass: 'star', class: this.starType},
          this._l(this.itemClasses, function (t, s) {
            return e('span', {key: s, staticClass: 'star-item', class: t})
          }))
      }, staticRenderFns: []
    }
    var o = s('VU/8')(n, a, !1, function (t) {s('Y/1k')}, null, null).exports,
      r = {install: function (t, e) {t.component(o.name, o)}}
    'undefined' != typeof window && window.Vue && window.Vue.use(r)
    e.default = r
  }
}, ['lVK7'])
//# sourceMappingURL=main.6c030aa31ac833663e35.js.map
