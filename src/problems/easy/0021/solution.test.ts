import { test } from "bun:test";
import { ListNode } from "../../../helpers/ListNode";
import mergeTwoLists from "./solution";

test("0021 --test-1", () => {
  const listNode1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const listNode2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  // prettier-ignore
  const expected = new ListNode(1, new ListNode( 1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))));

  const result = mergeTwoLists(listNode1, listNode2);

  Bun.deepEquals(result, expected);
});

test("0021 --test-2", () => {
  const listNode1 = new ListNode();
  const listNode2 = new ListNode();
  // prettier-ignore
  const expected = new ListNode();

  const result = mergeTwoLists(listNode1, listNode2);

  Bun.deepEquals(result, expected);
});

test("0021 --test-3", () => {
  const listNode1 = new ListNode();
  const listNode2 = new ListNode(0);
  // prettier-ignore
  const expected = new ListNode(0);

  const result = mergeTwoLists(listNode1, listNode2);

  Bun.deepEquals(result, expected);
});
