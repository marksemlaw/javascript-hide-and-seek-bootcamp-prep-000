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
  let id = 'div#grand-node'
  let div = ' div'
  let query = document.querySelectorAll(id)
  while (query !== null){
    id = id =+ div
    let answer = query
  }
  return answer
}