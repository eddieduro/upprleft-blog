export default function(){
  this.transition(
    this.debug(),
    this.hasClass('transition-container'),
    this.fromRoute('shop.product'),
    this.toRoute('shop.index'),
    this.use('fade'),
    this.reverse('fade')
  ),
  this.transition(
    this.debug(),
    this.withinRoute('product'),
    this.fromRoute('shop.index'),
    this.toRoute('shop.product'),
    this.use('toLeft', { duration: 2000 })
  );

};
