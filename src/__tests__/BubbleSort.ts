import bubble_sort from "@code/BubbleSort";

test("bubble-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    bubble_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

test("bubble-sort-2", function () {
    const arr = [1000, 23, 32, 9, 3, 7, 4, 69, 420, 42, 1];

    debugger;
    bubble_sort(arr);
    expect(arr).toEqual([1, 3, 4, 7, 9, 23, 32, 42, 69, 420, 1000]);
});
