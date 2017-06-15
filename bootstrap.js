const { Component, h, render } = window.preact;

render(h('header', { style: 'color: red', text: 'bla'}, 'Hello World!') , document.querySelector('.prd'));