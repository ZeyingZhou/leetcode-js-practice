//MergeTwoLinkedList
//Expect better Run time solution

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var mergeTwoLists = function(l1, l2) {
    let l3 = new ListNode(0);
    let head = l3;
    if(l1 === null && l2 === null ){
        return l1;
    }
    while(l1 != null && l2 != null){   
    if(l1.val > l2.val){
        l3.val = l2.val;
        l2 = l2.next;
    }
    else if(l1.val < l2.val){
        l3.val = l1.val;
        l1 = l1.next;
    }
    else {
        l3.val = l1.val;
        l1 = l1.next;
    }
    l3.next = new ListNode();
    l3 = l3.next;
    }
    while(l1 != null){
    l3.val = l1.val;
    l1 = l1.next;
    if(l1 != null){
    l3.next = new ListNode();
    l3 = l3.next;
    }
    }
    while(l2 != null){
    l3.val = l2.val;
    l2 = l2.next;
    if(l2 != null){
    l3.next = new ListNode();
    l3 = l3.next;
    }
    }
    
    return head;
};