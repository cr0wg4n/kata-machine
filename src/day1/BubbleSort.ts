export default function bubble_sort(arr: number[]): void {
  let counter = 0
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      counter++
      if(arr[i] > arr[j]) {
        const tmp = arr[j]
        arr[j] = arr[i]
        arr[i] = tmp
      }
    }
  }

  console.log(counter)
  counter=0

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length -1 -i; j++) {
      counter++
      if(arr[j] > arr[j+1]) {
        const tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
    }
  }
  console.log(counter)
}