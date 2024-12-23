export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `
      <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" 
        type="button">
        Count is ${counter}
      </button>
    `
  }
  
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}