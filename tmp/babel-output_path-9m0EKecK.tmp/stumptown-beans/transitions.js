define('stumptown-beans/transitions', ['exports'], function (exports) {
  exports['default'] = function () {
    this.transition(this.fromRoute('index'), this.toRoute('shop'), this.use('toDown'), this.reverse('toUp')), this.transition(this.hasClass('activeUser'),

    // this makes our rule apply when the liquid-if transitions to the
    // true state.
    this.toValue(true), this.use('toDown', { duration: 300, easing: 'ease' }),

    // which means we can also apply a reverse rule for transitions to
    // the false state.
    this.reverse('toUp', { duration: 300, easing: 'ease' }));
  };

  ;
});