export class Node<T> {
    constructor(
        public data: T,
        public next?: Node<T>
    ){}
}

export default class SinglyLinkedList<T> {
    public length: number;

    constructor(
        private head?: Node<T>,
        private tail?: Node<T>
    ) {
        this.length = 0
    }

    prepend(item: T): void {
        const newNode = new Node(item)
        if(this.head) {
            newNode.next = this.head
            this.head = newNode
            this.length++
        } else  {
            this.append(item)
        }
    }

    insertAt(item: T, idx: number): void {
        if(idx === 0){
            this.prepend(item)
        } else if (idx >= this.length) {
            this.append(item)
        } else {
            const nIdx = idx - 1 
            if(idx < this.length) {
                this.insertNext(nIdx, item)
            }
        }
    }  

    append(item: T): void {
        const newNode = new Node(item)
        this.length++
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            if(this.tail){
                this.tail.next = newNode
                this.tail = newNode
            }
        }
    }

    toArray(): T[]{
        let next = this.head
        const array: T[] = []
        do {
            if(next){
                array.push(next.data)
                next = next.next
            }
        } while (next)
        return array
    }

    clean() {
        this.head=undefined
        this.tail=undefined
        this.length=0
    }

    remove(item: T): T | undefined {
        const array = this.toArray()
        if(array.includes(item)){
            this.clean()
            for (const i of array) {
                if(i!==item){
                    this.append(i)
                }
            }
            return item
        }else{
            return undefined
        }
    }

    get(idx: number): T | undefined {
        let counter = 0
        let next = this.head
        do {
            if(next && counter === idx){
                return next.data
            }
            next = next?.next
            counter++
        } while (next)
        return undefined
    }

    removeAt(idx: number): T | undefined {
        if(this.head) {
            if(idx <= 0){
                const data = this.head.data
                this.head = this.head.next
                this.length--
                return data
            } else {
                const nIdx = idx - 1
                if(idx < this.length) {
                    return this.removeNext(nIdx)
                }
                return undefined
            }
        }else {
            return undefined
        }
    }

    private removeNext(idx: number): T | undefined {
        let counter = 0
        let next: undefined | Node<T> = this.head

        do {
            if(next && counter === idx){
                const data = next.next?.data
                next.next = next.next?.next
                this.length--
                return data
            }
            next = next?.next
            counter++
        } while (next)

        return undefined
    }

    private insertNext(idx: number, item: T): T | undefined {
        let counter = 0
        let next: undefined | Node<T> = this.head
        const newNode = new Node(item)

        do {
            if(next && counter === idx){
                newNode.next = next.next
                next.next = newNode
                this.length++
                return item
            }
            next = next?.next
            counter++
        } while (next)
        return undefined
    }
}

// const singleList = new SinglyLinkedList<number>()

// singleList.append(1)
// singleList.append(2)
// singleList.append(2)
// singleList.append(4)
// singleList.append(-1)
// console.log('length:', singleList.length)
// console.log(singleList.toArray())
// singleList.insertAt(10, 10)
// singleList.removeAt(1)
// console.log('length:', singleList.length)
// console.log(singleList.toArray())

// singleList.remove(2)
// singleList.remove(3)
// singleList.prepend(-1)

// console.log(singleList.toArray())
// console.log('length:', singleList.length)

// console.log(singleList.get(0));
// console.log(singleList.get(1));
// console.log(singleList.get(2));
// console.log(singleList.get(3));
// console.log(singleList.get(4));
// console.log()
// console.log(singleList.toArray())
// console.log(singleList.removeAt(3))
// console.log(singleList.toArray())
// singleList.insertAt(10, 10)
// singleList.append(10)
// console.log('demo')
// console.log(singleList.toArray())
