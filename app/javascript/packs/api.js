 const getCSRFToken = (() => {
  const csrfElement = document.evaluate("//meta[@name='csrf-token']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  return () => {
    return csrfElement.getAttribute("content");
  }
})();

export function getActivities(){
  return fetch("/activities.json", {headers: {'X-CSRF-Token': getCSRFToken()}}).then(d => d.json())
}

export function signOut(){
  return fetch("/users/sign_out", {method: 'DELETE', headers: {'X-CSRF-Token': getCSRFToken()}});
}