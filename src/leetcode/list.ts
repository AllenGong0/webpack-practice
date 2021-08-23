// interface List{
//     value: any
//     next: List
// }


class ListNode{
    constructor(val: any, next?: ListNode | null){
        this.val = val
        this.next = next
    }
    val: any
    next: ListNode | null | undefined
}

function setList(head: ListNode){
    for (let index = 2; index <= 5; index++) {
        head.next = new ListNode(index)
        head = head.next
    }
}

// function reverseList(head: List) {
//     let cur
//     let next = head
//     while (next) {
//         console.log("I")
//         const tmp = next.next
//         next.next = cur
//         cur = next
//         next = tmp
//     }
//     console.log(cur)

// }

function mergeTwoList(l1, l2){
    if(!(l1&&l2)){
        return l1 || l2
    }
    if(l1.val < l2.val){
        l1.next = mergeTwoList(l1.next, l2)
    }else{
        l2.next = mergeTwoList(l1, l2.next)
    }
}
const mergeTwoLists = function(l1, l2) {
    if(!(l1 && l2)){
        return l1 || l2
    }

    const head = new ListNode(-1)
    let h = head
    while(l1 && l2){
        if(l1.val > l2.val){
            h.next = l2
            l2 = l2.next
        }else{
            h.next = l1
            l1 = l1.next
        }
        h = h.next
    }
    h.next = l1 || l2
    return head.next
};

function listTest(){
    const l1 = new ListNode(1)
    l1.next = new ListNode(3)
    l1.next.next = new ListNode(4)

    const l2 = new ListNode(1)
    l2.next = new ListNode(2)
    l2.next.next = new ListNode(4)


}

function shiftTest(){
    const arr = [1,2,3]
    while (arr.length) {
        const a = arr.shift()
        console.log(a)
        if(a===1){
            return
        }
    }
}
const diffTree = function(trees, count = 0){
    const newTrees = []
    count = count + trees.length
    while(trees.length){
        const treeNode = trees.shift()
        if(treeNode.left){
            newTrees.push(treeNode.left)
        }
        if(treeNode.right){
            newTrees.push(treeNode.right)
        }
    }
    if(newTrees.length){
        return diffTree(newTrees, count)
    }else{
        return count
    }
}
shiftTest()