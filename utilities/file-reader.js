const fileReader = ({ method, file }) => {
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    // Handle error
    reader.onerror = () => {
      reader.abort()
      reject(new DOMException('Problem parsing file'))
    }
    // Handle success
    reader.onload = () => {
      resolve(reader.result)
    }
    reader[method](file)
  })
}

export const readAsDataURL = (file) =>
  fileReader({ method: 'readAsDataURL', file })
