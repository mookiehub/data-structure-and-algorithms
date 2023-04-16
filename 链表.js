class LinkedNode {
    // 创建链表节点
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    // 循环遍历
    loopTraversal(callback = () => {}) {
        let node = this;
        while (node) {
            callback(node.value);
            node = node.next;
        }
    }
    // 递归遍历
    recursiveTraversal(callback = () => {}, node = this) {
        if (node) {
            callback(node.value);
            this.recursiveTraversal(callback, node.next);
        }
    }
    // 反转链表
    reverse(node = this) {
        if (!node.next) {
            // 如果是最后一个节点，直接返回
            return node;
        }
        const reversedNode = this.reverse(node.next);
        // 使当前节点的下一个节点的next指向当前节点
        node.next.next = node;
        // 清空当前节点的next指向
        node.next = null;
        return reversedNode;
    }
}
