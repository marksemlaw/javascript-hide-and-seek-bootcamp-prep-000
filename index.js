function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div#nested .target')
}

function increaseRankBy(n){
  const initialrank = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < initialrank.length; i++) {
  initialrank[i].innerHTML = (i + 1).toString()
}}

function deepestChild(){
  let grandnode = document.querySelectorAll('#grand-node')
  let nextnode = grandnode.children[0]
  while (nextnode){
    grandnode = nextnode
    nextnode = grandnode.children[0]
    }
  return grandnode
}