define('stumptown-beans/components/liquid-unless', ['exports', 'stumptown-beans/components/liquid-if'], function (exports, _stumptownBeansComponentsLiquidIf) {
  exports['default'] = _stumptownBeansComponentsLiquidIf['default'].extend({
    helperName: 'liquid-unless',
    layoutName: 'components/liquid-if',
    inverted: true
  });
});