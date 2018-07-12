/**
 * 获取文档节点
 * @param {*} id
 * @returns dom
 */
module.exports = function(id){
  if(!id || id.indexOf('#')!==0){
    return;
  }
  if('querySelector' in document){
    return document.querySelector(id);
  }
  return document.getElementById(id.substr(1));
};