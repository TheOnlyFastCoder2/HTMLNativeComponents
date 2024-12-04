async function  loadComponents(node) {
  for (const item of iterateDOMTree(node)) {
    const componentName = item.dataset.component;
    if (componentName) {
      await getComponent(componentName, item);
    }
  }
}


function* iterateDOMTree(node) {
  const stack = [node];
  while (stack.length > 0) {
    const current = stack.pop();
    yield current;
    for (let i = current.children.length -1; i >= 0; i--) {
      stack.push(current.children[i]);
    }
  }
}


function getComponent(nameComponent, containerNode) {
  fetch(`/imports/${nameComponent}.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(html => {
      containerNode.parentElement.insertAdjacentHTML('beforeend', html);
      containerNode.remove();
    })
    .catch(error => {
      console.error('Error loading component:', nameComponent, error);
    });
}


window.addEventListener('load', () => {
  const root = document.getElementById('root');
  if (root) {
    loadComponents(root);
  } else {
    console.error("Element with ID 'root' not found.");
  }
});