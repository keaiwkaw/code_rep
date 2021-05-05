var reverseKGroup = function(head, k) {

};
ListNode pro = head;
while (pro != null) {
    ListNode temp = pro;
    pro = pro.next;
    temp.next = low;
    low = temp;
}     
return low;
}

