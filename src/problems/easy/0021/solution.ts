import { ListNode } from "../../../helpers/ListNode";

const mergeTwoLists = (
  listNode1: ListNode | null,
  listNode2: ListNode | null,
): ListNode | null => {
  if (!listNode1 || !listNode2) return listNode1 || listNode2;

  if (listNode1.val < listNode2.val) {
    listNode1.next = mergeTwoLists(listNode1.next, listNode2);

    return listNode1;
  }

  listNode2.next = mergeTwoLists(listNode1, listNode2.next);

  return listNode2;
};

export default mergeTwoLists;
