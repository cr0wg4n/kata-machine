function qs(arr: number[]): number[] {
  if(arr.length < 2) {
    return arr
  } else {
    const pivot = arr[0]
    const less = arr.slice(1, arr.length).filter(i => i <= pivot)
    const greater = arr.slice(1, arr.length).filter(i => i > pivot)
    return [...qs(less), pivot, ...qs(greater)]
  }
}

export default function quick_sort(arr: number[]): number[] {
  return qs(arr)
}