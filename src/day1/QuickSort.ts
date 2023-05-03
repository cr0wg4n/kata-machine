// Reduced way 
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


function quick(arr: number[], lo: number, hi: number): void {
  if(lo >= hi) {
    return
  }
  const pivotIdx = partition(arr, lo, hi)
  quick(arr, lo, pivotIdx -1)
  quick(arr, pivotIdx+1, hi)
}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi]
  let idx = lo - 1 
  for (let i = lo; i < hi; i++) {
    if(arr[i] <= pivot) {
      idx++
      const tmp = arr[i]
      arr[i] = arr[idx]
      arr[idx] = tmp
    }
  }

  idx++
  arr[hi] = arr[idx]
  arr[idx] = pivot

  return idx
}


export default function quick_sort(arr: number[]): number[] {
  quick(arr, 0, arr.length - 1)
  return  arr
}