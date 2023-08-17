// oldVnode = ['a', 'b', 'c']
// newVnode = ['a', 'd', 'c', 'b']

/**
 * 
 * @param {string[]} oldVnode 
 * @param {string[]} vnode 
 */
const diff = (oldVnode, vnode) => {
  let copy = [...oldVnode];
  let oldS = 0;
  let oldE = oldVnode.length - 1;
  let S = 0;
  let E = vnode.length - 1;
  while(oldS <= oldE && S <= E) {
    if (oldVnode[oldS] === vnode[S]) {
      oldS++;
      S++;
    }
    if (oldVnode[oldE] === vnode[E]) {
      oldE--;
      E--;
    }
    if (oldVnode[oldS] === vnode[E]) {
      copy[oldS] = vnode[E];
      oldS++;
      E--;
    }
    if (oldVnode[oldE] === vnode[S]) {
      copy[oldE] = vnode[S];
      oldE--;
      S++;
    }
    console.log(
      oldS,
      oldE,
      S,
      E,
    );
  }
  if (oldS > oldE) {
    for (let i = S;i <= E;i++) {
      // copy.splice(i, 0, vnode[i]);
    }
  }
  console.log(copy);
  
}
diff(['a', 'b', 'c'], ['a', 'd', 'c', 'b'])